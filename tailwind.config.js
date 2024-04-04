/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    fontFamily: {
      // display: ["Montserrat", 'sans-serif'],
      // display2 : ["Lato", "sans-serif"],
      display: ["Montserrat", 'sans-serif'],
      display2: ["Montserrat", 'Arial'],
      display3: ["Lato", 'sans-serif'],
    },
    fontWeight:{
      ww : 300 
    },
    
    extend: {
      backgroundImage: {
        'moonbg': "url('/src/assets/moon3.png')",
      },
      colors: {
        
       
      }
    },

  },
  plugins: [],
}



// .montserrat-<uniquifier> {
//   font-family: "Montserrat", sans-serif;
//   font-optical-sizing: auto;
//   font-weight: <weight>;
//   font-style: normal;
// }


