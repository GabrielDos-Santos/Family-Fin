/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        canvas: "#f3f5f9",
        ink: "#0f172a",
        muted: "#64748b",
        brand: "#2563eb",
        "brand-soft": "#dbeafe",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        glow: "0 10px 24px -10px rgba(37,99,235,.55)",
      },
    },
  },
  plugins: [],
};
