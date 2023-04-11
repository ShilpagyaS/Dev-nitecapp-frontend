/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Prata: ["Prata", "serif"],
        Inter: ["Inter", "sans-serif"],
      },

      colors: {
        primary: {
          base: '#967126',
          hoverbase: '#967126'
        }
      }

    },
    screens: {
      'sm': '414px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

    }
  },
  plugins: [],
}


//orange:#F19B6C