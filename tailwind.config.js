/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pry-red': 'hsl(0, 78%, 62%)',
        'pry-cyan': 'hsl(180, 62%, 55%)',
        'pry-orange': 'hsl(34, 97%, 64%)',
        'pry-blue': 'hsl(212, 86%, 64%)',
        'ntl-very-dark-blue': 'hsl(234, 12%, 34%)',
        'ntl-grayish-blue': 'hsl(229, 6%, 66%)',
        'ntl-very-light-gray': 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};
