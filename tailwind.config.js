import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        globalBg: "#53669e",
        textColour: "#130035",
        lightText: "#B1C4FF",
      },
      fontSize: {
        titleSize: "84px",
      },
      width: {
        computerWidth: "960px",
      },
      fontFamily: {
        micro: ["Micro 5"],
        // jersey: ["Jersey 15"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
