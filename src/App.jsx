import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import SwitchTheme from './components/SwitchTheme';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const useStyles = makeStyles((theme,) => ({
  App: {
    textAlign: 'center',
    display: 'flex',
    height: '100vh',
    width: '99vw',
    flexDirection: 'column',
    padding: theme.spacing(2)
  }
}));

const App = () => {

  const classes = useStyles();

  const [themeMode, setThemeMode] = useState(false);

  var theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themeMode ? 'dark' : 'light',
        },
      }),
    [themeMode],
  );

  return (
    <div className={classes.App}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SwitchTheme themeMode={themeMode} setThemeMode={setThemeMode} />
        <Projects />
        <Contacts />
      </ThemeProvider>
    </div>
  );
}

export default App;
