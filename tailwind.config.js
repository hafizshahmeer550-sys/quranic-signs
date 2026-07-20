/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Royal Green (40%)
        royal: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // White (50%)
        white: {
          pure: '#ffffff',
          snow: '#f8fafc',
          light: '#f1f5f9',
          off: '#e2e8f0',
        },
        // Black (10%)
        dark: '#0a0a0a',
        'dark-light': '#1a1a1a',
        'dark-lighter': '#2a2a2a',
        // Muted text
        'text-muted': '#64748b',
      },
      fontFamily: {
        arabic: ['Amiri', 'serif'],
        urdu: ['Noto Nastaliq Urdu', 'serif'],
      },
      boxShadow: {
        'royal': '0 4px 20px rgba(22, 101, 52, 0.12)',
        'royal-lg': '0 10px 40px rgba(22, 101, 52, 0.15)',
        'royal-xl': '0 20px 60px rgba(22, 101, 52, 0.18)',
      },
    },
  },
  plugins: [],
}