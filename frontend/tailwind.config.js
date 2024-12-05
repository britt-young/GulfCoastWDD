/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Encode Sans Expanded', 'sans'],
        'sarif': ['Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [],
}
