/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}','./node_modules/react-tailwindcss-datepicker/dist/index.esm.js'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#F5F5F5',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        500: '500px',
        550: '550px',
        600: '600px',
        760: '760px',
        780: '780px',
        800: '800px',
        900: '900px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      colors: {
        mainbg: '#DDE1E6',
        maindarkbg:'#292524',
        darkbg1: '#25323C',
        darkbg2: '#303B4B',
        darkbg3: '#1E262D',
        darkbg4: '#4A5568',
        scope1: '#FF8127',
        scope2: '#085AB0', 
        scope3: '#009250'
      },
    },
  },
  plugins: [],
};
