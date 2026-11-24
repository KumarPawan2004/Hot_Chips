/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-emerald-600',
    'bg-amber-600',
    'bg-blue-600',
    'bg-purple-600',
    'bg-rose-600',
    'bg-orange-600',
    'text-emerald-700',
    'text-amber-700',
    'text-orange-700',
    'text-yellow-800',
    'bg-amber-50',
    'bg-orange-50',
    'bg-emerald-50',
    'bg-yellow-50',
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
