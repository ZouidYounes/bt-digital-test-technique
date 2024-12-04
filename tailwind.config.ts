import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/test-page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/test-page/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@trilogy-ds/react/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'test-blue': '#25465F',
        'test-grey': "#F4F4F4",
        'test-dark': "#E4EAED",
        'test-ligh-blue': "#0C7B91"
      },
    },
  },
  plugins: [],
} satisfies Config;

