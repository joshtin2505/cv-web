import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      "max-2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "max-xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "max-lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "max-md": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "max-sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: "1279px",
      // => @media (min-width: 1279px) { ... }

      lg: "1023px",
      // => @media (min-width: 1023px) { ... }

      md: "767px",
      // => @media (min-width: 767px) { ... }

      sm: "639px",
      // => @media (min-width: 639px) { ... }
    },
  },
  plugins: [],
}
export default config
