import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno()
  ],
  theme: {
    colors: {
      'retro-beige': '#f5f5dc',
      'retro-white': '#fafafa',
      'retro-black': '#1a1a1a',
      'retro-brown': '#8b7355',
      'retro-grey': '#d3d3d3',
      'retro-blue': '#003366',
      'retro-red': '#8b0000'
    },
    fontFamily: {
      'serif': ['Times New Roman', 'serif'],
      'sans': ['Arial', 'Helvetica', 'sans-serif']
    }
  },
  shortcuts: {
    'retro-card': 'bg-retro-white border-2 border-retro-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    'retro-btn': 'bg-retro-grey border-2 border-retro-black px-4 py-2 font-sans text-sm cursor-pointer hover:bg-retro-beige active:shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all',
    'retro-btn-primary': 'bg-retro-blue text-white border-2 border-retro-black px-4 py-2 font-sans text-sm cursor-pointer hover:bg-[#004488] active:shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all',
    'retro-input': 'bg-white border-2 border-retro-black px-3 py-2 font-sans text-sm focus:outline-none focus:border-retro-blue',
    'retro-heading': 'font-serif font-bold text-retro-black',
    'newspaper-column': 'border-r-2 border-retro-black pr-4'
  }
});
