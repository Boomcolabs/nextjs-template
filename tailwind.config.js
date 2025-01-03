/** @type {import('tailwindcss').Config} */

const palette = {
  primary: '#2573F1',
  secondary: '#3DC5FF',
  cream: '#F3F9FF',
  positive: '#44546F',
  negative: '#CF3A4E',
  white: '#FFFFFF',
  peach: '#DCEAF7',
  pink: '#FFF3F5',
  yellow: '#E9950E',
  grey: '#687489',
  'tblack': '#091E42',
  'tgrey': '#44546F',
  'tlightgrey': '#B3B9C4',
  'twhite': '#FFFFFF',
  'tblue': '#1975E0',
  'tlightblue': '#3DC5FF',
  'sprimary': '#75B1FF',
  'sgrey': '#E1E4E8',
  'sred': '#FE989B',
  'bwhite': '##FDFDFD',
  'btableheader': '#FAFAFA',
  'bmain': '#f7f7fa',
  'bdisable': '#F5F5F5',
  'bivorycream': '#FFF8F3',
  'bwarmpeach': '#F7E7DC',
};


export function getPx(size) {
  // TODO: do this
  const designWidth = 1920;
  const ratio = size / designWidth;
  console.log('ratio', ratio * 100);
  return `${ratio * 100}vw`;
}



module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '2xs ': '0.125rem',
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
     colors: palette,
     fontFamily: {
      roboto: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
     },
     fontSize: {
      '2xs': "10px",
      'xs': "12px",
      'sm': "14px",
      'md': "16px",
      'lg': "18px",
      'xl': '20px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '40px',
      '5xl': '48px',
     }
    },
  },
  plugins: [],
};
