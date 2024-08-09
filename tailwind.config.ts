/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        foldit: ['Foldit', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        kalnia: ['Kalnia Glaze', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        move: "move 5s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
            
          },
          to: {
            backgroundPosition: "-200% 0",
          },
          move: {
            "0%": { transform: "translateX(-200px)" },
            "100%": { transform: "translateX(200px)" },
          },
        },
      },
    },
  },
  plugins: [],
};
