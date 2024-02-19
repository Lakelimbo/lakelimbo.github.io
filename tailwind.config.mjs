import defaultStyles from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      container: {
         center: true,
         padding: "2rem",
      },
      extend: {},
      fontFamily: {
         sans: ["Inter Variable", ...defaultStyles.fontFamily.sans],
         display: ["Space Grotesk Variable"],
      },
   },
   plugins: [require("@catppuccin/tailwindcss")],
};
