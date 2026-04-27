import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno()
  ],
  theme: {
    colors: {
      'admin-grey': '#d3d3d3',
      'admin-dark': '#808080',
      'admin-white': '#f0f0f0',
      'admin-black': '#1a1a1a',
      'admin-blue': '#003366',
      'admin-red': '#8b0000',
      'admin-green': '#2d5016'
    },
    fontFamily: {
      'sans': ['Arial', 'Helvetica', 'sans-serif'],
      'mono': ['Courier New', 'monospace']
    }
  },
  shortcuts: {
    'admin-card': 'bg-admin-white border-2 border-admin-black p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
    'admin-btn': 'bg-admin-grey border-2 border-admin-black px-4 py-2 font-sans text-sm cursor-pointer hover:bg-admin-dark hover:text-white active:shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all',
    'admin-btn-primary': 'bg-admin-blue text-white border-2 border-admin-black px-4 py-2 font-sans text-sm cursor-pointer hover:bg-[#004488] active:shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all',
    'admin-btn-danger': 'bg-admin-red text-white border-2 border-admin-black px-4 py-2 font-sans text-sm cursor-pointer hover:bg-[#a00000] active:shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all',
    'admin-btn-success': 'bg-admin-green text-white border-2 border-admin-black px-4 py-2 font-sans text-sm cursor-pointer hover:bg-[#3d6020] active:shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all',
    'admin-input': 'bg-white border-2 border-admin-black px-3 py-2 font-sans text-sm focus:outline-none focus:border-admin-blue w-full',
    'admin-table': 'w-full border-2 border-admin-black bg-white',
    'admin-table-header': 'bg-admin-blue text-white font-bold text-left p-2 border-b-2 border-admin-black'
  }
});
