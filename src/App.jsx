import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import SwitchTheme from './components/SwitchTheme';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    height: window.innerHeight,
    width: window.innerWidth,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
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
    <div className={classes.root}>
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
