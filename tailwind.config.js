/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'rosa-pastel': '#b06576', // Rosa pastel más fuerte
        'celeste-pastel': '#A7D8E7',
        'lavanda-pastel': '#E2D1F9',
        'verde-menta': '#A7E6D2',
        'amarillo-pastel': '#F9F3A4',
        'durazno-pastel': '#F9C1A0',
        'beige-claro': '#F5E4C7',
        blanco: '#FFFFFF'
      }
    }
  },
  plugins: []
};
