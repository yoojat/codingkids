module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    transitionTimingFunction: {
      'menu-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },

    extend: {
      keyframes: {
        wiggle: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out',
      },
      backgroundImage: {
        'main-background': `url('/background_image.jpg')`,
      },
      textShadow: {
        '2xl': '2px 2px 8px rgba(0,0,0,1)',
      },
      borderRadius: {
        '10xl': '400px',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
