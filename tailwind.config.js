const px0_2000 = { ...Array.from(Array(2001)).map((_, i) => `${i}px`) };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors : {
      inherit: 'inherit',
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      dark: '#222',
      error: '#fa2e43',
      primary: 'orange',
    },
    fontSize: {
      inherit: 'inherit',
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '32px',
      '4xl': '40px',
      '5xl': '48px',
      '6xl': '64px',
    },
    fontFamily: {
      pretendard: ['var(--font-pretendard)']
    },
    extend: {
      minWidth: px0_2000,
      maxWidth: px0_2000,
      minHeight: px0_2000,
      borderWidth: px0_2000,
      spacing: {
        ...px0_2000,
      },
    },
  },
  plugins: [],
};