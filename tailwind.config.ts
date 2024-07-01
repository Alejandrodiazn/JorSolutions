import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        primary: "#3DB54A",
        secondary: "rgba(36, 170, 225, 1)",
        'gray-footer': '#1C1C1C',
      },
      backgroundImage: {
        "gradient-to-b": "linear-gradient(180deg, #3B9FDA 0%, #1F5574 100%)",
        "project-gray-gradient": "linear-gradient(180deg, #2C2C2C 0%, #0C0C0C 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
