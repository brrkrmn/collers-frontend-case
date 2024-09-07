import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "mobile": "370px",
      "laptop": "1024px",
      "tablet": "640px"
    },
    colors: {
      transparent: 'transparent',
      divider: colors.slate['700'],
      foreground: {
        amber: colors.amber['900'],
        light: {
          DEFAULT: "#FFFFFF",
          primary: colors.amber['50'],
          secondary: colors.slate['200']
        },
        dark: {
          DEFAULT: "#000000",
          primary: colors.slate['900'],
          secondary: colors.slate['600'],
        },
      },
      background: {
        light: "#FFFFFF",
        dark: colors.slate['900'],
      },
      yellow: {
        light: colors.amber['100'],
        neutral: colors.amber['200'],
        dark: colors.amber['400']
      },
      green: {
        light: colors.green['500'],
        DEFAULT: colors.green['700']
      },
      pink: colors.pink['700'],
      blue: colors.sky['700'],
      purple: colors.fuchsia['700'],
      amber: colors.amber['900'],
      rose: colors.rose['600'],
    },
    extend: {
      backgroundImage: {
        'linear-gradient': 'linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 89.63%)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '10px',
        'lg': '20px',
        'xl': '30px',
        '2xl': '50px',
      },
      boxShadow: {
        'light': '0px 0px 15px 0px #FFFFFF12, 0px 25px 50px -12px #FFFFFF40',
        'xs': '0px 0px 4px 0px #00000012, 0px 4px 6px -1px #0000001A',
        'sm': '0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A',
        'md': '0px 0px 6px 0px #00000012, 0px 10px 15px -3px #0000001A',
        'lg': '0px 0px 15px 0px #00000012, 0px 25px 50px -12px #00000040'
      }
    },
  },
  plugins: [],
};
export default config;
