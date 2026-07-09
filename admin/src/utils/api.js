const BASE_URL = 'http://localhost:8000/api';

function getAdminToken() {
  return localStorage.getItem('chronicle_admin_access_token');
}

async function request(method, endpoint, body = null, requiresAuth = false) {
  const headers = { 'Content-Type': 'application/json' };

  if (requiresAuth) {
    const token = getAdminToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }

  const config = { method, headers };
  if (body) config.body = JSON.stringify(body);

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  // Auto-refresh token if expired
  if (response.status === 401 && requiresAuth) {
    const refreshToken = localStorage.getItem('chronicle_admin_refresh_token');
    if (refreshToken) {
      const refreshRes = await fetch(`${BASE_URL}/auth/refresh/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh: refreshToken }),
      });
      if (refreshRes.ok) {
        const data = await refreshRes.json();
        localStorage.setItem('chronicle_admin_access_token', data.access);
        headers['Authorization'] = `Bearer ${data.access}`;
        const retryConfig = { method, headers };
        if (body) retryConfig.body = JSON.stringify(body);
        return fetch(`${BASE_URL}${endpoint}`, retryConfig).then(r => r.json());
      }
    }
  }

  if (!response.ok) {
    const err = await response.json().catch(() => ({ error: 'Request failed' }));
    throw err;
  }

  if (response.status === 204) return null;
  return response.json();
}

export const adminApi = {
  get: (endpoint) => request('GET', endpoint),
  post: (endpoint, body) => request('POST', endpoint, body, true),
  put: (endpoint, body) => request('PUT', endpoint, body, true),
  patch: (endpoint, body) => request('PATCH', endpoint, body, true),
  delete: (endpoint) => request('DELETE', endpoint, null, true),

  // Admin auth
  login: (username, password) =>
    request('POST', '/auth/admin-login/', { username, password }),
};

export default adminApi;
