/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0055cc',
        },
        secondary: {
          light: '#8be9fd',
          DEFAULT: '#50c8e9',
          dark: '#2c91b5',
        },
        accent: {
          light: '#ffcc80',
          DEFAULT: '#ff9800',
          dark: '#e67700',
        },
        background: {
          light: '#ffffff',
          DEFAULT: '#f8fafc',
          dark: '#f1f5f9',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
} 