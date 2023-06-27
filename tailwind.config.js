module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        gradient:
          'linear-gradient( to right, white 0%, white 50%, #c61330 50%, #c61330 100% )',
      },
      fontFamily: {
        sans: ['Inter var, sans-serif'],
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        brand: {
          DEFAULT: '#c61330',
          light: '#c61330',
        },
      },
    },
  },
};
