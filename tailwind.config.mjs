/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a2744", // deep navy
        secondary: "#c9a84c", // warm gold
        accent: "#8b1a1a", // dark red, for highlights/tags
        surface: "#f7f5f0", // warm off-white background
        text: "#1c1c1c", // near-black body text
        muted: "#6b6b6b", // secondary text
        border: "#ddd8cc", // warm grey borders
      },
      fontFamily: {
        heading: ['"Playfair Display"', "Georgia", "Cambria", "serif"],
        body: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
      },
      maxWidth: {
        prose: "70ch",
        container: "1200px",
      },
      spacing: {
        // Generous editorial spacing scale
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      letterSpacing: {
        kicker: "0.12em",
      },
      boxShadow: {
        card: "0 1px 3px rgba(26, 39, 68, 0.06), 0 4px 16px rgba(26, 39, 68, 0.05)",
        "card-hover":
          "0 2px 6px rgba(26, 39, 68, 0.1), 0 8px 28px rgba(26, 39, 68, 0.1)",
      },
    },
  },
  plugins: [],
};
