const USER_STORAGE_KEY = 'chronicle_users';
const SESSION_STORAGE_KEY = 'chronicle_current_user';

const DEFAULT_ADMIN = {
  id: 'srikar-admin-id-26',
  email: 'srikarch248@gmail.com',
  password: 'srikar@4267CH',
  first_name: 'Srikar',
  role: 'admin',
  date_joined: new Date().toISOString()
};

function getUsers() {
  const stored = localStorage.getItem(USER_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      // ignore parsing errors and return empty/default
    }
  }
  const defaultUsers = [DEFAULT_ADMIN];
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(defaultUsers));
  return defaultUsers;
}

function saveUsers(users) {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
}

export const api = {
  register: async (name, email, password) => {
    const users = getUsers();
    const cleanEmail = email.trim().toLowerCase();
    
    if (users.some(u => u.email === cleanEmail)) {
      throw { email: ['A user with this email already exists.'] };
    }

    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      email: cleanEmail,
      password, // Note: In a pure client-side mockup, we store password as-is
      first_name: name,
      role: 'user',
      date_joined: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);
    return newUser;
  },

  login: async (email, password) => {
    const users = getUsers();
    const cleanEmail = email.trim().toLowerCase();
    const found = users.find(u => u.email === cleanEmail && u.password === password);

    if (!found) {
      throw { error: 'Invalid email or password' };
    }

    const sessionUser = {
      id: found.id,
      email: found.email,
      first_name: found.first_name,
      username: found.email,
      date_joined: found.date_joined,
      role: found.role
    };

    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser));
    return {
      user: sessionUser,
      tokens: {
        access: 'mock-access-token',
        refresh: 'mock-refresh-token'
      }
    };
  },

  me: async () => {
    const session = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!session) throw new Error('Not authenticated');
    return JSON.parse(session);
  },

  logout: async () => {
    localStorage.removeItem(SESSION_STORAGE_KEY);
  }
};

export default api;
