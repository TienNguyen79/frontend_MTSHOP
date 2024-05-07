/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Open Sans", "sans-serif;"],
      },
      colors: {
        primary: "#D7CEC6",
        error: "rgb(247,0,0)",
        success: "rgb(50,199,1)",
      },
      boxShadow: {
        // Thêm cấu hình box-shadow tùy chỉnh ở đây
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
