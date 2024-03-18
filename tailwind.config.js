const {fontFamily} = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        textBlack: '#00000A',
        trustedHeading: '#0E3088',
      },

      gradientColorStops: (theme) => ({
        ...theme('colors'),
        quillblue: '#7184FD',
        quillindigo: '#3F7AF0',
        quillpurple: '#4F37EE',
        carpegreen: '#046202',
      }),
      backgroundImage: {
        hero: "url('/assets/background.png')",
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
        jost: ['var(--font-jost)', ...fontFamily.sans],
      },
      boxShadow: {
        input: '2px 2px 12px 0px rgba(0, 0, 0, 0.06)',
        inputMd:
          '1.0560001134872437px 1.0560001134872437px 6.336000442504883px 0px #0000000F',

        pulseblock: ' 0px 3px 12px 1px #5580DB36',
      },
    },
  },
  plugins: [],
};
