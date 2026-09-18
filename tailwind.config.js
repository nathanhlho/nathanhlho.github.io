/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pythagoras.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7FBFD",
        paper: "#FFFFFF",
        ink: "#1C222B",
        muted: "#67707B",
        line: "#E4E9EE",
        accent: "#4FA8DE",
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
