/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6347',
        secondary: '#4caf50',
      },
    },
    plugins: [],
  }
}