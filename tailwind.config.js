module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'karmijnrood': '#d40000',
        'vanille': '#fee46e',
        'koningsblauw': '#1353b4'
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['dark'],
    },
  },
  plugins: [],
}
