module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'morning-blue': '#7AA095',
      'dark-blue': '#101A2B',
      'light-green': '#7AE582',
      white: '#FFFFFF',
      lavender: '#E1E5F2',
      aquamarine: '#9FFFCB',
      pink: '#ef233c',
      yellow: '#f8961e',
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, paddingTop: '300px' },
          '100%': { opacity: 1, paddingTop: 0 },
        },
      },
    },
  },
  plugins: [],
};
