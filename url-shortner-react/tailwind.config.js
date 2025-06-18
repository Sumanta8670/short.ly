/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],  
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradiant": "linear-gradient(to right, #3b82f6, #9333ea)",
        "custom-gradiant-2": "linear-gradient(to left, #3b82f6, #f43f5e)",
        "card-gradiant": "linear-gradient(to right, #3b82ac, #4299e1)",
      },
      colors: {
        navbarColor: "#ffffff",
        btnColor: "3364F7",
        linkColor: "2a5bd7",
      },
      boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3)",
        right: "10px 0px 10px -5px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["responsive"],
    },
  },
  plugins: [],
};
