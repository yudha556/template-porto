/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "Bg1" : "#292F36",
        "Bg2" : "#1A1E23",
        "Brand1" : "#12F7D6",
        "Brand2" : "#98FAEC",
        "Grey" : "#43454D",
        "White" : "#FFFFFF",
      },
      primary: ['Poppins', 'sans-serif'], // Font utama
        mono: ['IBM Plex Mono', 'monospace'],
    },
  },
  plugins: [],
};
