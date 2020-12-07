import React from 'react';
import LightDark from './components/lightDark'

function App() {
  // const [theme, toggleTheme, componentMounted] = useDarkMode();
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // if (!componentMounted) {
  //   return <div />
  // };

  return (
    // <ThemeProvider theme={themeMode}>
    //   <>
    //     <GlobalStyles />
    //     <Toggle theme={theme} toggleTheme={toggleTheme} />
    //     <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
    //     <footer>
    //     </footer>
    //   </>
    // </ThemeProvider>
    <LightDark></LightDark>
  );
}

export default App;