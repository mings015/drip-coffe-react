// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
   ],
  theme: {
    extend: {
      colors: {
        primary: '#EEC81A',
        secondary: '#ECF1FA',
        dark: '#201D1E',
      },
      animation: {
        marquee: "marquee var(--duration, 30s) linear infinite",
      },

      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
      
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

