module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // for your JSX files
    './public/index.html', // add other file paths as needed
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 0.5s ease-in-out',
        'slide-in-left': 'slide-in-left 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
