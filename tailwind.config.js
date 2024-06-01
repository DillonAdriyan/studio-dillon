/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "/data/data/com.termux/files/home/node_modules/flowbite/**/*.js"],
  theme: {
   fontFamily : {
    'head': ['"Poppins', 'sans-serif']
   },
     container: {
      center: true,
      padding: '16px'
     },
    extend: {
     colors: {
      primary: '#865DFF',
      dark: '#171831',
     },
    },
  },
  plugins: [require('/data/data/com.termux/files/home/node_modules/flowbite/plugin')],
};

