import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Home from './pages/Home';
import { SnackbarProvider } from 'notistack';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ffb6c1', // Baby pink
        light: '#ffd1d9',
        dark: '#ff9aa8',
      },
      secondary: {
        main: '#ff69b4', // Hot pink
        light: '#ff8dc7',
        dark: '#ff1493',
      },
      background: {
        default: '#0a192f', // Dark navy
        paper: '#112240', // Slightly lighter navy
      },
      text: {
        primary: '#e6f1ff',
        secondary: '#8892b0',
      },
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
      h1: { 
        fontWeight: 800,
        color: '#e6f1ff',
        fontSize: '2.5rem',
        '@media (max-width:600px)': { fontSize: '2rem' },
      },
      h2: { 
        fontWeight: 700,
        color: '#e6f1ff',
        fontSize: '2rem',
        '@media (max-width:600px)': { fontSize: '1.6rem' },
      },
      h3: { 
        fontWeight: 700,
        color: '#e6f1ff',
        fontSize: '1.75rem',
        '@media (max-width:600px)': { fontSize: '1.4rem' },
      },
      h4: { 
        fontWeight: 600,
        color: '#e6f1ff',
        fontSize: '1.35rem',
        '@media (max-width:600px)': { fontSize: '1.15rem' },
      },
      h5: {
        '@media (max-width:600px)': { fontSize: '1rem' },
      },
      h6: {
        '@media (max-width:600px)': { fontSize: '0.95rem' },
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#0a192f',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: 'rgba(17, 34, 64, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 182, 193, 0.1)',
            backgroundImage: 'none',
          },
        },
      },
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    }
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ 
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      overflowX: 'hidden',
      overflowY: 'auto',
      backgroundColor: '#0a192f',
    }}>
      <div style={{ 
        position: 'relative', 
        zIndex: 20,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0a192f',
      }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider 
            maxSnack={3} 
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Home isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <ScrollToTop />
          </SnackbarProvider>
        </ThemeProvider>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <Zoom in={visible}>
      <Fab
        color="secondary"
        size="small"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          opacity: 0.8,
          bgcolor: 'rgba(255, 182, 193, 0.2)',
          color: '#ffb6c1',
          border: '1px solid #ffb6c1',
          '&:hover': {
            opacity: 1,
            bgcolor: 'rgba(255, 182, 193, 0.3)',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default App; 