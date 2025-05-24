module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f46e5',   // Light mode primary
          dark: '#6366f1',    // Dark mode primary
        },
        background: {
          light: '#ffffff',
          dark: '#0f172a',
        },
        text: {
          light: '#1e293b',
          dark: '#f8fafc',
        },
      },
      keyframes: {
        gridMove: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '40px 40px' },
        },
      },
      animation: {
        gridMove: 'gridMove 10s linear infinite',
      },
    },
  },
  plugins: [],
};
