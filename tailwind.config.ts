export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { left: "-80px" },
          "40%": { left: "calc(100% + 20px)" },
          "100%": { left: "calc(100% + 20px)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-25%)" },
        },
        "move-45": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(10px, -10px)" }, // moves diagonally (45°)
        },
        "move-diagonal": {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(20px, -20px)" }, // ↗️ up-right
          "50%": { transform: "translate(20px, 20px)" }, // ↘️ down-right
          "75%": { transform: "translate(-20px, 20px)" }, // ↙️ down-left
          "100%": { transform: "translate(0, 0)" }, // back to center ↖️
        },
      },
      animation: {
        shine: "shine 2.5s ease infinite",
        scroll: "scroll 30s linear infinite",
        "spin-slow": "spinSlow 12s linear infinite",
        "bounce-x": "bounce-x 2s infinite",
        "move-45": "move-45 1.7s ease-in-out infinite",
        "move-diagonal": "move-diagonal 7s ease-in-out infinite",
      },
      borderColor: {
        "white-40": "rgba(255, 255, 255, 0.40)", // custom border color
      },
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-50%)" },
      },
      screens: {
        mid: { min: "450px", max: "640px" },
      },
    },
  },
  plugins: [],
};
