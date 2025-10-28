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
      'sans': ['Funnel Sans', 'sans-serif'],
    },
    extend: {
      colors:
      {
        "kh-purple": "#161267",
      },

      animation: {
        fade1: '2s fadeIn 0s ease both',
        fade2: '2.5s fadeIn 0.5s ease both',
        fade3: '2.5s fadeIn 2s ease both',
        fade4: '2.5s fadeIn 2.5s ease both',
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

