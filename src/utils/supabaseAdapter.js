/**
 * Supabase Adapter
 * 
 * This file provides a template for migrating from localStorage to Supabase authentication.
 * Replace the localStorage implementation in AuthContext.jsx with these Supabase methods.
 * 
 * Installation:
 * npm install @supabase/supabase-js
 * 
 * Setup:
 * 1. Create a Supabase project at https://supabase.com
 * 2. Get your project URL and anon key
 * 3. Create .env file with:
 *    VITE_SUPABASE_URL=your-project-url
 *    VITE_SUPABASE_ANON_KEY=your-anon-key
 */

// Uncomment when ready to use Supabase:
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Supabase Authentication Methods
 * Replace the corresponding methods in AuthContext.jsx
 */

// Signup with Supabase
export const supabaseSignup = async (name, email, password) => {
  try {
    // const { data, error } = await supabase.auth.signUp({
    //   email,
    //   password,
    //   options: {
    //     data: {
    //       name: name
    //     }
    //   }
    // });

    // if (error) throw error;

    // return { success: true, message: 'Account created successfully! Check your email for verification.' };
    
    return { success: false, message: 'Supabase not configured yet' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Login with Supabase
export const supabaseLogin = async (email, password) => {
  try {
    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email,
    //   password
    // });

    // if (error) throw error;

    // return { success: true, user: data.user };
    
    return { success: false, message: 'Supabase not configured yet' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Logout with Supabase
export const supabaseLogout = async () => {
  try {
    // const { error } = await supabase.auth.signOut();
    // if (error) throw error;
    
    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Get current session
export const supabaseGetSession = async () => {
  try {
    // const { data: { session }, error } = await supabase.auth.getSession();
    // if (error) throw error;
    // return session;
    
    return null;
  } catch (error) {
    console.error('Error getting session:', error);
    return null;
  }
};

// Listen to auth state changes
export const supabaseOnAuthStateChange = (callback) => {
  // const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
  //   callback(session?.user || null);
  // });
  
  // return subscription;
  
  return null;
};

/**
 * Migration Guide:
 * 
 * 1. In AuthContext.jsx, replace:
 *    - signup() with supabaseSignup()
 *    - login() with supabaseLogin()
 *    - logout() with supabaseLogout()
 * 
 * 2. In useEffect, replace localStorage check with:
 *    supabaseGetSession().then(session => {
 *      if (session?.user) {
 *        setUser(session.user);
 *      }
 *      setLoading(false);
 *    });
 * 
 * 3. Add auth state listener:
 *    const subscription = supabaseOnAuthStateChange((user) => {
 *      setUser(user);
 *    });
 *    return () => subscription?.unsubscribe();
 * 
 * 4. Update user object structure to match Supabase:
 *    - user.id (UUID from Supabase)
 *    - user.email
 *    - user.user_metadata.name (custom fields)
 * 
 * 5. Remove all localStorage operations
 */
