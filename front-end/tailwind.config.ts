import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main: "#00cc00",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.1rem",
        sm: "0.1rem",
        lg: "0.1rem",
        xl: "0.1rem",
        "2xl": "0.1rem",
      },
    },
  },
  plugins: [],
};
export default config;
