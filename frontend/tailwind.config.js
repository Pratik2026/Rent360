/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#474fa0',
        secondary: '#ffac38',
        textcolor: '#444',
        grad: 'linear-gradient(#474fa0,#7d82bb)',
    },
  },
  plugins: [],
}
}