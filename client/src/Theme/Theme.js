import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#fffcf0',
      light: '#ffffff',
      dark: '#ccc9bd',
    },
    secondary: {
      main: '#c49d44',
      light: '#f9ce72',
      dark: '#906f13',
    },
    background: {
      paper: '#fffcf0',
      default: '#f9ce72',
    },
  },
});