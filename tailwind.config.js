/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   darkMode: 'class',
  theme: {
    colors:{
      'gray':'#c1c6cb',
      'white':'#ffffff',
      'green':'#3cb47c',
      'orang':'#f8c144',
      'black':'#f8c144',
      'blak-extri':'#2c3232',
      'orng-extri':'#fde1bd',
      'green-dark':'#f8c144'
    },
     fontSize:{
      'sm':['13px',{
        lineHeight:'15px',
        letterSpacing:'-0.25px',
        fontWeight:'500'
      }],
      'md':['13px',{
        lineHeight:'18px',
        letterSpacing:'-0.1px',
        fontWeight:'500'
      }],
      'x':['15px',{
        lineHeight:'15px',
        letterSpacing:'-0.25px',
        fontWeight:'700'
      }],
      'l':['15px',{
        lineHeight:'24px',
        letterSpacing:'-0.25px',
        fontWeight:'700'
      }],
       'xl':['24px',{
        lineHeight:'22px',
        letterSpacing:'-0.75px',
        fontWeight:'700'
      }],
      'xxl':['36px',{
        lineHeight:'33px',
        letterSpacing:'-1px',
        fontWeight:'700'
      }],
    },
    extend: {},
  },
  plugins: [],
};

