/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#7c3aed',
        light: '#ffffff',
        dark: '#1e293b',
        background: '#f8fafc',
        card: '#ffffff',
        text: '#334155',
        'text-light': '#64748b'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        code: ['"Fira Code"', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};