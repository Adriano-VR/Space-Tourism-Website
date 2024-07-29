/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        headerColor: "rgba(255, 255, 255, 0.05)"
      }
    },fontFamily:{
      bellefair: "Bellefair",
      Barlow:"barlow",
      Barlow_Condensed:"Barlow Condensed",
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addComponents }) {
      addComponents({
        '.text-preset-5': {
          'font-family': 'Barlow Condensed ,sans-serif',
          'font-style': 'normal',
          'font-weight': 400,
          'font-size': '28px',
          'line-height': '34px',
          'letter-spacing': '4px',
            color: '#D0D6F9',
        },
        '.text-preset-1': {
         'font-family': 'Bellefair',
         'font-style': 'normal',
         'font-weight':'400',
         'font-size':'144px',
         'line-height': '165px',
          color: '#FFFFFF'
        },
        '.text-preset-9': {
         'font-family': 'Barlow',
         'font-style': 'normal',
         'font-weight':'400',
         'font-size':'18px',
         'line-height': '180%',
          color: ' #D0D6F9'
        },
        '.text-preset-4': {
          'font-family': 'Bellefair',
          'font-style': 'normal',
          'font-weight':'400',
          'font-size':'32px',
          'line-height': '37px',
          'text-transform': 'uppercase',
           color: ' #FFFFFF',
          ' mix-blend-mode': 'normal',
           'opacity': 0.5
         },
         '.text-preset-8': {
          'font-family': 'Barlow Condensed',
          'font-style': 'normal',
          'font-weight':'400',
          'font-size':'16px',
          'line-height': '19px',
           color: ' #FFFFFF',
           'letter-spacing': '2px',
         },
         '.text-preset-2': {
          'font-family': 'Bellefair',
          'font-style': 'normal',
          'font-weight':'400',
          'font-size':'96px',
          'line-height': '110px',
           color: ' #FFFFFF',
         },
         '.text-preset-7': {
          'font-family': 'Barlow Condensed',
          'font-style': 'normal',
          'font-weight':'400',
          'font-size':'14px',
          'line-height': '17px',
           color: ' #D0D6F9',
          ' text-transform': 'uppercase',
          'text-align': 'center',
          'letter-spacing': '2px',
         },
         '.text-preset-6': {
          'font-family': 'Bellefair',
          'font-style': 'normal',
          'font-weight':'400',
          'font-size':'28px',
          'line-height': '32px',
         ' text-align': 'center',
          'text-transform': 'uppercase',
           color: ' #FFFFFF',
         },
         '.text-preset-8-bold': {
          'font-family': 'Barlow Condensed',
          'font-style': 'normal',
          'font-weight':'700',
          'font-size':'16px',
          'line-height': '19px',
          'letter-spacing': '2.7px',
           color: ' #FFFFFF',
         },
         '.text-preset-3': {
          'font-family': 'Bellefair',
          'font-style': 'normal',
          'font-weight':'400',
          'font-size':'56px',
          'line-height': '64px',
          'text-transform': 'uppercase',
           color: ' #FFFFFF',
         },




        
      },
      
    
    
    );
    }
  ],
}




