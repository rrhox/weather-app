// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    typography: {
      fontFamily: string;
      weight: {
        bold: number;
        semibold: number;
        medium: number;
        light: number;
      };
    };
    colors: {
      white: string;
      blue: {
        100: string;
      };
      grey: {
        100: string;
      };
    };
    gradients: {
      100: string;
      200: string;
      300: string;
      400: string;
    };
    shadows: {
      100: string;
    };
  }
}
