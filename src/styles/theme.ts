import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      500: "#FFCD07",
    },
    gray: {
      0: "#f5f5f5",
      100: "#E0E0E0",
      300: "#828282",
      400: "#999999",
      600: "#333333",
    },
    red: {
      500: "#EB5757",
      600: "#E60000",
    },
    green: {
      50: "#93D7AF",
      500: "#27AE60",
      600: "#168821",
    },
    blue: {
      500: "#155BCB",
    },
  },
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "grey.600",
      },
    },
  },
});
