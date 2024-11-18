/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        'primary': '#274029',
        'secondary': '#1F2937',
      },
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
        Lobster: ["Lobster", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '6px',
          sm: '6px',
          md: '16px',
        }
      },
      keyframes: {
        move: {
          "50%": {
            transform: "translateY(-1rem)"
          }
        },
        rotate: {
          "0%": { 
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        },
        scaleUp: {
          "0%": { 
            transform: "scale(0.8)"
          },
          "50%": { 
            transform: "scale(1.2)"
          },
          "100%": { 
            transform: "scale(0.8)"
          }
        }
      },
      animation: {
        movingY: "move 3s linear infinite",
        rotating: "rotate 15s linear infinite",
        scalingUp: "scaleUp 3s linear infinite"
      }
    }
  },
  plugins: [],
}

