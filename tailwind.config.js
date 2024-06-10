/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SegoeUI', 'sans-serif'],
      },
      colors: {
        "background": "#EFEFEF",
        "title": "#2788E9",
        "primary": "#2688EB",
        "secondary": "#949494",
        "danger": "#EE3749",
        "text": "#1A1A1A"
      }
    },
  },
  plugins: [],
}