const ENDPOINT_STORAGE_MAP = {
  '/jobs/': 'chronicle_jobs',
  '/bulletins/': 'chronicle_bulletins',
  '/skills/': 'chronicle_skills',
  '/roadmaps/': 'chronicle_roadmaps',
  '/toolkit/templates/': 'chronicle_templates',
  '/toolkit/prompts/': 'chronicle_prompts',
  '/toolkit/linkedin/': 'chronicle_linkedin',
  '/flysky/countries/': 'chronicle_countries',
  '/flysky/universities/': 'chronicle_universities',
  '/flysky/internships/': 'chronicle_internships'
};

function resolveTable(endpoint) {
  if (ENDPOINT_STORAGE_MAP[endpoint]) return ENDPOINT_STORAGE_MAP[endpoint];
  const base = endpoint.replace(/\/\d+\/$/, '/');
  return ENDPOINT_STORAGE_MAP[base] || null;
}

function extractId(endpoint) {
  const match = endpoint.match(/\/(\d+)\/$/);
  return match ? parseInt(match[1], 10) : null;
}

function notifyStorageChange() {
  window.dispatchEvent(new Event('chronicle_storage_update'));
}

export const adminApi = {
  get: async (endpoint) => {
    const table = resolveTable(endpoint);
    if (!table) throw new Error(`Unknown endpoint: ${endpoint}`);
    
    const data = localStorage.getItem(table);
    return data ? JSON.parse(data) : [];
  },

  post: async (endpoint, body) => {
    const table = resolveTable(endpoint);
    if (!table) throw new Error(`Unknown endpoint: ${endpoint}`);

    const data = localStorage.getItem(table);
    const items = data ? JSON.parse(data) : [];

    const newItem = {
      ...body,
      id: items.length > 0 ? Math.max(...items.map(i => i.id || 0)) + 1 : 1
    };

    items.push(newItem);
    localStorage.setItem(table, JSON.stringify(items));
    notifyStorageChange();
    return newItem;
  },

  put: async (endpoint, body) => {
    const table = resolveTable(endpoint);
    const id = extractId(endpoint);
    if (!table || id === null) throw new Error(`Invalid endpoint: ${endpoint}`);

    const data = localStorage.getItem(table);
    const items = data ? JSON.parse(data) : [];
    
    let updatedItem = null;
    const nextItems = items.map(item => {
      if (item.id === id) {
        updatedItem = { ...item, ...body, id };
        return updatedItem;
      }
      return item;
    });

    if (!updatedItem) throw new Error(`Item with id ${id} not found in ${table}`);

    localStorage.setItem(table, JSON.stringify(nextItems));
    notifyStorageChange();
    return updatedItem;
  },

  patch: async (endpoint, body) => {
    return adminApi.put(endpoint, body);
  },

  delete: async (endpoint) => {
    const table = resolveTable(endpoint);
    const id = extractId(endpoint);
    if (!table || id === null) throw new Error(`Invalid endpoint: ${endpoint}`);

    const data = localStorage.getItem(table);
    const items = data ? JSON.parse(data) : [];
    const nextItems = items.filter(item => item.id !== id);

    localStorage.setItem(table, JSON.stringify(nextItems));
    notifyStorageChange();
    return null;
  },

  login: async (email, password) => {
    // Read from the same chronicle_users stored by the public site
    const usersStr = localStorage.getItem('chronicle_users');
    const users = usersStr ? JSON.parse(usersStr) : [
      {
        id: 'srikar-admin-id-26',
        email: 'srikarch248@gmail.com',
        password: 'srikar@4267CH',
        first_name: 'Srikar',
        role: 'admin',
        date_joined: new Date().toISOString()
      }
    ];

    const cleanEmail = email.trim().toLowerCase();
    const found = users.find(u => u.email === cleanEmail && u.password === password);

    if (!found || found.role !== 'admin') {
      throw new Error('Invalid admin credentials');
    }

    const sessionUser = {
      id: found.id,
      email: found.email,
      username: found.email,
      first_name: found.first_name,
      is_staff: true
    };

    localStorage.setItem('chronicle_admin_user', JSON.stringify(sessionUser));
    localStorage.setItem('chronicle_admin_access_token', 'mock-admin-token');
    return {
      user: sessionUser,
      tokens: {
        access: 'mock-admin-access-token',
        refresh: 'mock-admin-refresh-token'
      }
    };
  }
};

export default adminApi;
