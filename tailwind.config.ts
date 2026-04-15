import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pale-sky": "#b3d5e9",
        "ash-grey": "#bdbea9",
        "muted-teal": "#8db38b",
        "jungle-teal": "#56876d",
        "deep-teal": "#3f6451",
        cream: "#f8f7f2",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        blob: "60% 40% 55% 45% / 50% 60% 40% 50%",
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #b3d5e9 0%, #bdbea9 33%, #8db38b 66%, #56876d 100%)",
        "gradient-soft":
          "linear-gradient(180deg, #f8f7f2 0%, #eef4ee 100%)",
        "gradient-teal":
          "linear-gradient(135deg, #8db38b 0%, #56876d 100%)",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(86, 135, 109, 0.25)",
        glow: "0 20px 60px -20px rgba(86, 135, 109, 0.4)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" },
          "50%": { borderRadius: "40% 60% 45% 55% / 60% 50% 50% 40%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
