module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'morning-blue': '#7AA095',
      'dark-blue': '#022B3A',
      'light-green': '#7AE582',
      white: '#FFFFFF',
      lavender: '#E1E5F2',
      aquamarine: '#9FFFCB',
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
