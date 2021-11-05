// import { blue, green, indigo, purple, red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core';
const lightTheme = createTheme({
  spacing: 4,
  palette: {
    type: 'light',
    primary: {
      main: '#26a27b'
    },
    secondary: {
      main: '#fafafa'
    }
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14
  }
});
const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#fafafa'
    },
    secondary: {
      main: '#26a27b'
    }
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14
  }
});

// const baseTheme = createTheme({
//   typography: {
//     fontFamily: "'Work Sans', sans-serif",
//     fontSize: 14
//     // fontFamilySecondary: "'Roboto Condensed', sans-serif"
//   }
// });
// const darkTheme = createTheme({
//   ...baseTheme,
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#26a27b'
//     },
//     secondary: {
//       main: '#fafafa'
//     }
//   }
// });
// const lightTheme = createTheme({
//   ...baseTheme,
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#fafafa'
//     },
//     secondary: {
//       main: '#26a27b'
//     }
//   }
// });
export { darkTheme, lightTheme };
