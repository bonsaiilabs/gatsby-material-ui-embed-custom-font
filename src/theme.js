import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#FFDE03',
      100: '#FEFAC0',
      600: '#FFDE03',
      50: '#FFFEE6',
    },
    secondary: {
      main: '#0336ff',
      100: '#CDC4FE',
    },
  },
  typography: {
    fontFamily: [
      'Playfair', // <- The custom font first
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
