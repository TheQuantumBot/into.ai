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
      },
      animation: {
        shine: "shine 2.5s ease infinite",
        scroll: 'scroll 30s linear infinite',

      },
      borderColor: {
        'white-40': 'rgba(255, 255, 255, 0.40)', // custom border color
      },
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
     
    },
  },
  plugins: [],

};
