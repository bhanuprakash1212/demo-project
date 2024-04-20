/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        silver: "#bcc1ca",
        lavender: "#d6d5eb",
        black: "#000",
        mediumslateblue: "#6a64f1",
        gray: {
          "100": "#171a1f",
          "200": "rgba(0, 0, 0, 0)",
          "300": "rgba(0, 0, 0, 0.41)",
        },
        midnightblue: "#130a53",
        lightslategray: "#9095a0",
        lightsalmon: "#f08d5f",
        mediumblue: "#5303e0",
        dimgray: "#565e6c",
        darkslateblue: "#5b378c",
        gold: "#f6c001",
        blueviolet: "#8a2ae2",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        epilogue: "Epilogue",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      mini: "15px",
      sm: "14px",
      smi: "13px",
      base: "16px",
      "4xl": "23px",
      lg: "18px",
      "8xl": "27px",
      inherit: "inherit",
    },
    screens: {
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
