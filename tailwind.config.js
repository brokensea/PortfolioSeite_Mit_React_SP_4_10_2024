import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/daisyui/**/*.js",
  ],

  theme: {
    extend: {
      // 在这里添加自定义主题
      colors: {
        primary: '#4a90e2', // 修改主色
        secondary: '#50e3c2', // 修改次色
      },
    },
  },
  plugins: [daisyui],
}