/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      fontFamily:{
        sawarabi: ['Sawarabi Mincho'],
        permanent: ['Permanent Marker']
      },
      margin:{
        center: '15px'
      },
      animation: {
        "tracking-in-expand": "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both"
      },
      keyframes: {
        "tracking-in-expand": {
            "0%": {
                "letter-spacing": "-.5em",
                opacity: "0"
            },
            "40%": {
                opacity: ".6"
            },
            to: {
                opacity: "1"
            }
        }
      }
    },
  },
  plugins: [],
}
