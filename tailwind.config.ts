import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Open Sans',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      title: [
        'Lato',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      body: [
        'Open Sans',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ]
    },
    extend: {
      colors: {
        neutral: {
          50: '#FFFFFF',
          100: '#F7F7F7',
          200: '#F0F0F0',
          300: '#E8E8E8',
          400: '#E0E0E0',
          500: '#D9D9D9',
          600: '#666666',
          700: '#4D4D4D',
          800: '#333333',
          900: '#191919',
          DEFAULT: '#FFFFFF'
        },
        primary: {
          50: '#FDC6B7',
          100: '#FDB5A2',
          200: '#FC9D83',
          300: '#FB8464',
          400: '#FB6B45',
          500: '#FA5B30',
          600: '#E1522B',
          700: '#BC4424',
          800: '#96371D',
          900: '#702916',
          DEFAULT: '#FA5B30'
        }
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '16px' }],
        '6xl': ['60px', { lineHeight: '16px' }],
        '7xl': ['72px', { lineHeight: '16px' }],
        '8xl': ['96px', { lineHeight: '16px' }],
        '9xl': ['128px', { lineHeight: '16px' }]
      },
      borderRadius: {
        'none': '0px',
        'sm': '6px',
        DEFAULT: '12px',
        'md': '18px',
        'lg': '24px',
        'xl': '36px',
        '2xl': '48px',
        '3xl': '72px',
        'full': '9999px'
      },
      spacing: {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        11: '44px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
        36: '144px',
        40: '160px',
        44: '176px',
        48: '192px',
        52: '208px',
        56: '224px',
        60: '240px',
        64: '256px',
        72: '288px',
        80: '320px',
        96: '384px',
        px: '1px',
        0.5: '2px',
        1.5: '6px',
        2.5: '10px',
        3.5: '14px'
      }
    }
  },
  plugins: [],
  important: '#webcrumbs'
};

export default config; 