/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      'overpass': ['Overpass', 'sans-serif'],
      'sans': ['Funnel Sans', 'sans-serif'],
      'title': ['Archivo', 'serif'],
    },
    extend: {
      colors:
      {
        "kh-purple": "#161267",
      },
      
      animation: {
        fade1: '1.5s fadeIn 0s ease-out both',
        fade2: '1.5s fadeIn 0.5s ease-out both',
        fade3: '1.5s fadeIn 1s ease-out both',
        fade4: '1.5s fadeIn 1.5s ease-out both',
      },

      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
      }),
    },
  },
  plugins: [],
}

