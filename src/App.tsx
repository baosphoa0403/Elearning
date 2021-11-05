import React from 'react';
import './App.css';
import Demo from './Demo/Demo';
import { Button, createTheme, CssBaseline, Switch, ThemeProvider } from '@material-ui/core';
import UseDarkMode from './hooks/UseDarkMode';
// import { darkTheme, lightTheme } from './config/ThemeConfig';
// import { darkTheme } from './config/ThemeConfig';

const App = () => {
  const [flag, setFlag] = React.useState<boolean>(false);
  const baseTheme = createTheme({
    typography: {
      fontFamily: "'Work Sans', sans-serif",
      fontSize: 14
    }
  });
  const theme = createTheme({
    ...baseTheme,
    palette: {
      type: flag ? 'dark' : 'light',
      primary: {
        main: flag ? '#26a27b' : '#fafafa'
      },
      secondary: {
        main: flag ? '#fafafa' : '#26a27b'
      }
    }
  });
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
  //   console.log(flag ? darkTheme : lightTheme);

  return (
    <ThemeProvider theme={flag ? darkTheme : lightTheme}>
      <button type='submit' className='btn btn-danger'>
        Click show menu
      </button>
      <Demo name='bao' />
      <Button color='primary' variant='contained'>
        {' '}
        primary
      </Button>
      <Button color='secondary' variant='contained'>
        {' '}
        secondary
      </Button>
      <Button
        variant='contained'
        onClick={() => {
          alert('hello');
        }}>
        Default
      </Button>
      <Switch
        checked={flag}
        onChange={() => {
          setFlag(!flag);
        }}
        name='checkedA'
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      {flag ? 'hiếu' : 'lok'}
      <Demo name='bảo' />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
