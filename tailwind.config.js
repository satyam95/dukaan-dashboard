/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      body1: ["15px", "22px"],
      body2: ["13px", "16px"],
      sm: ["14px", "20px"],
      xs: ["12px", "16px"],
      xl: ["20px", "28px"],
      head1: ["32px", "38px"],
    },
    extend: {
      maxWidth: {
        '400': '400px',
        '248': '248px',
      },
      width: {
        '248': '240px',
      },
      colors: {
        "primary": "#1E2640",
        "blue": "#146EB4",
        "primary-100": "#353C53",
        "white-100": "rgba(255, 255, 255, 0.1)",
        "black-95": "rgba(242, 242, 242, 1)",
        "black-90": "rgba(230, 230, 230, 1)",
        "black-85": "rgba(217, 217, 217, 1)",
        "black-30": "rgba(77, 77, 77, 1)",
        "black-12": "rgba(26, 24, 30, 1)",
      },
    },
  },
  plugins: [],
};
