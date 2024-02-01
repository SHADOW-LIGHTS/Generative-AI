/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        blobright: {
          "0%": {
            transform: "translate(0px, 0px) scale(1) rotate(0deg)",
          },
          "10%": {
            transform: "translate(10px, -10px) scale(1.1) rotate(5deg)",
            animationTimingFunction: "ease-in",
          },
          "20%": {
            transform: "translate(20px, -30px) scale(1.2) rotate(10deg)",
            animationTimingFunction: "ease-in-out",
          },
          "28%": {
            transform: "translate(30px, -40px) scale(1.4) rotate(20deg)",
            animationTimingFunction: "cubic-bezier(0.5, 0, 0.5, 1)",
          },
          "40%": {
            transform: "translate(40px, -50px) scale(1.8) rotate(45deg)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translate(30px, -30px) scale(1.3) rotate(40deg)",
            animationTimingFunction: "cubic-bezier(0.5, 0, 0.5, 1)",
          },
          "70%": {
            transform: "translate(25px, -30px) scale(1.1) rotate(50deg)",
            animationTimingFunction: "ease-in-out",
          },
          "80%": {
            transform: "translate(-10px, 10px) scale(0.9) rotate(55deg)",
            animationTimingFunction: "ease-out",
          },
          "90%": {
            transform: "translate(-20px, 20px) scale(0.8) rotate(60deg)",
            animationTimingFunction: "cubic-bezier(0.5, 0, 0.5, 1)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1) rotate(0deg)",
          },
        },
        blobleft: {
          "0%": {
            transform: "translate(0px, 0px) scale(1) rotate(0deg)",
          },
          "10%": {
            transform: "translate(-10px, 10px) scale(1.1) rotate(5deg)",
            animationTimingFunction: "ease-in",
          },
          "20%": {
            transform: "translate(-30px, -20px) scale(1.2) rotate(10deg)",
            animationTimingFunction: "ease-in-out",
          },
          "28%": {
            transform: "translate(-40px, 30px) scale(1.4) rotate(20deg)",
            animationTimingFunction: "cubic-bezier(0.5, 0, 0.5, 1)",
          },
          "40%": {
            transform: "translate(-50px, 40px) scale(1.8) rotate(45deg)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translate(-30px, 30px) scale(1.3) rotate(40deg)",
            animationTimingFunction: "cubic-bezier(0.5, 0, 0.5, 1)",
          },
          "70%": {
            transform: "translate(30px, -25px) scale(1.1) rotate(50deg)",
            animationTimingFunction: "ease-in-out",
          },
          "80%": {
            transform: "translate(20px, -10px) scale(0.9) rotate(55deg)",
            animationTimingFunction: "ease-out",
          },
          "90%": {
            transform: "translate(20px, -20px) scale(0.8) rotate(60deg)",
            animationTimingFunction: "cubic-bezier(0.5, 0, 0.5, 1)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1) rotate(0deg)",
          },
        },
      },
      animation: {
        blobright: "blobright 30s infinite",
        blobleft: "blobleft 30s infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
