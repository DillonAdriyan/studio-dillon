/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "/data/data/com.termux/files/home/node_modules/flowbite/**/*.js"],
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
  plugins: [
   require('/data/data/com.termux/files/home/node_modules/flowbite/plugin'),
   require('/data/data/com.termux/files/home/node_modules/daisyui'),
   ],
   daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};

