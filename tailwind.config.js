/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1550px',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      colors: {
        brand: {
          vinho:        '#7B1C42',
          'vinho-mid':  '#9B2855',
          'vinho-light':'#C04070',
          rosa:         '#E8A4B8',
          blush:        '#F7E3EB',
          'blush-dark': '#EFCBDA',
          cream:        '#FDF8F5',
          'cream-alt':  '#F5EDE8',
          charcoal:     '#2C2C2C',
          muted:        '#6B6B6B',
        },
      },
      boxShadow: {
        'soft':   '0 4px 24px rgba(123, 28, 66, 0.08)',
        'glow':   '0 0 40px rgba(232, 164, 184, 0.4)',
        'card':   '0 2px 16px rgba(44, 44, 44, 0.06)',
        'button': '0 8px 24px rgba(123, 28, 66, 0.3)',
      },
      animation: {
        'fade-up':     'fadeUp 0.7s ease forwards',
        'fade-in':     'fadeIn 0.9s ease forwards',
        'float':       'float 5s ease-in-out infinite',
        'pulse-ring':  'pulseRing 2s ease-out infinite',
        'shimmer':     'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)',   opacity: '0.8' },
          '70%':  { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
    },
  },
  plugins: [],
}
