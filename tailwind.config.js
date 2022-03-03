module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '200px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1560px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
