/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-bg': '#030712',
        'cyber-bg-sec': '#0B1220',
        'cyber-primary': '#46F5B4',
        'cyber-secondary': '#2DD4BF',
        'cyber-text': '#FFFFFF',
        'cyber-text-muted': '#B8C1CC',
        'cyber-border': 'rgba(70, 245, 180, 0.25)',
        'cyber-card': 'rgba(15, 23, 42, 0.8)',
        'cyber-glow': 'rgba(70, 245, 180, 0.35)',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-glow': '0 0 15px rgba(70, 245, 180, 0.25)',
        'neon-glow-hover': '0 0 25px rgba(70, 245, 180, 0.5)',
        'neon-glow-teal': '0 0 15px rgba(45, 212, 191, 0.25)',
        'cyber-card-shadow': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
