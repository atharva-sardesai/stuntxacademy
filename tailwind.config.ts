import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-primary)',
        surface: 'var(--bg-secondary)',
        accent: 'var(--accent-primary)',
        warning: 'var(--accent-secondary)',
        text: 'var(--text-primary)',
        muted: 'var(--text-muted)',
        borderline: 'var(--border-color)'
      },
      boxShadow: {
        glow: '0 0 30px rgba(255,59,0,0.35)'
      }
    }
  },
  plugins: []
};

export default config;
