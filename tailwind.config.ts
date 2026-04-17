import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0A0A0A',
        'brand-white': '#FFFFFF',
        'brand-light': '#F0F0EE',
        'gray-1': '#1C1C1C',
        'gray-2': '#2A2A2A',
        'gray-3': '#3A3A3A',
        'gray-4': '#6B6B6B',
        'gray-5': '#9B9B9B',
        neon: '#C0C0C0',
        'neon-2': '#A0A0A8',
      },
      fontFamily: {
        heading: ['Orbitron', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        shimmer: 'shimmer 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        blink: 'blink 2s ease-in-out infinite',
        draw: 'draw 2s ease-out forwards',
        'rotate-slow': 'rotateSlow 30s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%,100%': { backgroundPosition: '-200% 0' },
          '50%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        'glow-pulse': {
          '0%,100%': { opacity: '0.35' },
          '50%': { opacity: '0.75' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        draw: {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
        rotateSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
