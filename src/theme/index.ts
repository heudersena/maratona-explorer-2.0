import { extendTheme } from "@chakra-ui/react";

const colors = {
  gray: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    55: "blue",
  },
  me: {
    900: "#a4b0be",
    800: "#7bed9f",
    700: "#2f3542",
    600: "#ff7f50",
    60: "#2f3542",
    55: "#ced6e0",
    50: "#f1f2f6",
  },
};

const theme = extendTheme({ colors });

export default theme;
