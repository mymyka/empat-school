import type { Config } from "tailwindcss";

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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          "50": "#fef1f8",
          "100": "#fee5f3",
          "200": "#ffbce3",
          "300": "#ffa1d6",
          "400": "#ff66b9",
          "500": "#fb399c",
          "600": "#eb1778",
          "700": "#cd095d",
          "800": "#a90b4d",
          "900": "#8d0e43",
          "950": "#570024",
        },
        nutural: {
          "50": "#ffffff",
          "100": "#efefef",
          "200": "#dcdcdc",
          "300": "#bdbdbd",
          "400": "#989898",
          "500": "#7c7c7c",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3d3d3d",
          "950": "#292929",
        },
        background: {
          "50": "#f7f6f3",
          "100": "#eeede6",
          "200": "#dcd8cc",
          "300": "#c6beab",
          "400": "#afa288",
          "500": "#9e8c71",
          "600": "#917d65",
          "700": "#796655",
          "800": "#645448",
          "900": "#52463c",
          "950": "#2b241f",
        },
      },
    },
  },
};
export default config;
