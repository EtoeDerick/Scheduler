/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js", //flyonui theme
    '../path/to/fullcalendar/**/*.js', //fullcalendar libary
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],
  flyonui: {
    themes: ["light", "dark", "gourmet", "corporate", "luxury", "soft"],
    vendors: true // Enable vendor-specific CSS generation
  }
}

