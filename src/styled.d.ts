// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoint: { md: number; lg: number };
    borderRadius: string;
    typography: {
      fontFamily: string;
      weight: {
        bold: number;
        semibold: number;
        medium: number;
        light: number;
      };
      colors: {
        100: string;
        200: string;
      };
    };
    colors: {
      white: string;
      blue: {
        100: string;
        200: string;
        300: string;
        400: string;
        600: string;
        700: string;
        800: string;
      };
      grey: {
        100: string;
        200: string;
        300: string;
        400: string;
      };
    };
    gradients: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
    };
    shadows: {
      100: string;
    };
    opacity: {
      100: string;
    };
  }
}
