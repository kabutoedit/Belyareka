/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,js,jsx}"],
  theme: {
    extend: {
      screens: {
        mac: "1920.98px",
        ss: "526px",
        xs: "426px", // extra size
        ms: "320px", // micro size
        // ns: "", // nano size ns
        // ps: "", // picko size ps
        // fs: "", //  femto size fs
        // attos: "" // attos size
      },
      lineHeight: {
        11: "2.75rem" /* 2.75rem * 44px */,
        12: "3rem" /* 3rem * 48px */,
      },
      colors: {
        hexahrome: "var(--br-color-hexahrome, #00afef)",
        jetblack: "var(--br-color-jet-black, #252525)",
        snow: "var(--br-color-snow, #eeeeee)",
        light: "var(--br-color-light, #fff)",
        ghost: "var(--br-color-ghost, #828282)",
        silver: "var(--br-color-silver, #f7f7f7)",
        elephant: "var(--br-color-elephant, #ddd)",
        air: "var(--br-color-air, #f1f1f1)",
        // pinki: {
        //   DEFAULT: "fdsfadf",
        //   100: "#cca",
        //   200: "#ccb",
        // },
      },
      fontFamily: {
        cocosignum: "var(--font-cocosignum)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
