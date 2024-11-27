/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  /*
  Customizing the Theme:
The extend object allows you to add or override Tailwind's default configuration without losing the defaults.

Custom Fonts:

The fontFamily key adds two new custom font families:
zentry: A font called 'zentry', with 'sans-serif' as a fallback.
general: A font called 'general', with 'sans-serif' as a fallback.
  
  */ 
  theme: {
    extend: {
      fontFamily:{
        zentry : ['zentry','sans-serif'],
        general:['general','sans-serif'],
        'circular-web':['circular-web','sans-serif'],
        'robert-medium':['robert-medium','sans-serif'],
        'robert-regular':['robert-regular','sans-serif'],
      },
      colors:{
        blue:{
          50: '#DFDFF0',
          75: '#DFDFF2',
          100: '#F0F2FA',
          200: '#010101',
          300: '#4FB7DD',
        },
        violet:{
          300:'#5724FF',
        },
        yellow:{
          100:'#8E983F',
          300: '#EDFF66'
        }
      },
    },
  },
  plugins: [],
}