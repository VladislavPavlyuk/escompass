export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003399",
        "primary-hover": "#002266",
        secondary: "#ffcc00",
        accent: "#0066cc",
        background: "#fafafa",
        surface: "#ffffff",
        "surface-hover": "#f0f0f0",
        text: "#1a1a1a",
        "text-secondary": "#666666",
        error: "#ef4444",
        success: "#22c55e",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};