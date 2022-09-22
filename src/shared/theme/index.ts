import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  borderRadius: '25px',
  typography: {
    fontFamily: 'Poppins, sans-serif',
    weight: { bold: 700, semibold: 600, medium: 500, light: 300 },
  },
  colors: {
    white: '#FFFFFF',
    blue: {
      100: '#5B9FE3',
    },
    grey: {
      100: '#f1f1f1',
    },
  },
  gradients: {
    100: 'linear-gradient(130deg,#011354 0%,#5B9FE3 100%)',
    200: 'linear-gradient(130deg, #464C64 0%, #99A9B9 100%)',
    300: 'linear-gradient(130deg, #5374E7 0%, #77B9F5 100%)',
  },
  shadows: {
    100: '5px 10px 20px 0 rgba(0,0,0,0.17)',
  },
};

export { theme };
