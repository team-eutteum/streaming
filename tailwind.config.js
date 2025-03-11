const px0_2000 = { ...Array.from(Array(2001)).map((_, i) => `${i}px`) };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
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