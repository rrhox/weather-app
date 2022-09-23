import { DefaultTheme } from 'styled-components';

const colors: DefaultTheme['colors'] = {
  white: '#FFFFFF',
  blue: {
    100: '#5B9FE3',
    200: '#5374E7',
    300: '#01175F',
    400: '#011354',
    600: '#77B9F5',
    700: '#8fbede',
    800: '#b9d4eb',
  },
  grey: {
    100: '#f1f1f1',
    200: '#99A9B9',
    300: '#464C64',
  },
};

const theme: DefaultTheme = {
  borderRadius: '2.5rem',
  typography: {
    fontFamily: 'Poppins, sans-serif',
    weight: { bold: 700, semibold: 600, medium: 500, light: 300 },
    colors: {
      100: colors.white,
      200: colors.blue['300'],
    },
  },
  colors,
  gradients: {
    100: `linear-gradient(130deg,${colors.blue[400]} 0%,${colors.blue[100]} 100%)`,
    200: `linear-gradient(130deg, ${colors.grey[300]} 0%, ${colors.grey[200]} 100%)`,
    300: `linear-gradient(130deg, ${colors.blue[200]} 0%, ${colors.blue[600]} 100%)`,
    400: `linear-gradient(130deg, ${colors.blue[800]} 0%, ${colors.blue[700]} 100%)`,
    500: `linear-gradient(180deg, ${colors.white} 0%, rgba(255,255,255,0) 100%)`,
    600: `linear-gradient(130deg, ${colors.blue[200]} 60%, ${colors.blue[600]} 100%)`,
  },
  shadows: {
    100: '5px 10px 20px 0 rgba(0,0,0,0.17)',
  },
  opacity: {
    100: 'rgba(255, 255, 255, 0.1)',
  },
};

export { theme };
