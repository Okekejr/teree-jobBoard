import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { fonts } from "./Fonts";

export const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "myCustomColor",
        color: '#fff'
      },
    },
  },
  fonts,
  colors: {
    myCustomColor: "#020303",
  },
  sizes: {
    container: {
      xl: "1448px",
    },
  },
});

export default theme;
