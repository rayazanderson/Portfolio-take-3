import React from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style-components/theme'
import { GlobalStyles } from './style-components/global';
import  Toggle  from './toggle';
import{ useDarkMode } from './darkMode'

function LightDark() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
        <footer>
        </footer>
      </>
    </ThemeProvider>
  );
}

export default LightDark;
