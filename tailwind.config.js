/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        edu: ['"Edu AU VIC WA NT Hand"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        urbanist: ['"Urbanist"', 'sans-serif'],
        bellota: ['Bellota', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
