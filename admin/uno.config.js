import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno()
  ],
  theme: {
    colors: {
      'admin-grey': 'var(--admin-grey)',
      'admin-dark': 'var(--admin-dark)',
      'admin-white': 'var(--admin-white)',
      'admin-black': 'var(--admin-black)',
      'admin-blue': 'var(--admin-blue)',
      'admin-blue-hover': 'var(--admin-blue-hover)',
      'admin-red': 'var(--admin-red)',
      'admin-green': 'var(--admin-green)',
      'white': 'var(--white)'
    },
    fontFamily: {
      'sans': ['Arial', 'Helvetica', 'sans-serif'],
      'mono': ['Courier New', 'monospace']
    }
  },
  shortcuts: {
    'admin-card': 'bg-admin-white border-2 border-admin-black p-4 shadow-[2px_2px_0px_0px_var(--admin-black)]',
    'admin-btn': 'bg-admin-grey border-2 border-admin-black px-4 py-2 font-sans text-sm cursor-pointer hover:bg-admin-dark hover:text-white active:shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all',
    'admin-btn-primary': 'bg-admin-blue text-white border-2 border-admin-black px-4 py-2 font-sans text-sm cursor-pointer hover:bg-admin-blue-hover hover:text-black active:shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all',
    'admin-btn-danger': 'bg-admin-red text-white border-2 border-admin-black px-4 py-2 font-sans text-sm cursor-pointer hover:bg-[#a00000] active:shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all',
    'admin-btn-success': 'bg-admin-green text-white border-2 border-admin-black px-4 py-2 font-sans text-sm cursor-pointer hover:bg-[#3d6020] active:shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all',
    'admin-input': 'bg-white border-2 border-admin-black px-3 py-2 font-sans text-sm focus:outline-none focus:border-admin-blue w-full',
    'admin-table': 'w-full border-2 border-admin-black bg-white',
    'admin-table-header': 'bg-admin-blue text-white font-bold text-left p-2 border-b-2 border-admin-black'
  }
});
