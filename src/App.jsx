import { useMemo, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const properties = require('./properties');

const useStyles = makeStyles((theme) => ({
  App: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  }
}));

const App = () => {

  const classes = useStyles();
  const [themeMode, setThemeMode] = useState(true);

  var theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themeMode ? 'dark' : 'light',
          primary: { main: '#4483D4' },
          secondary: { main: '#44D4A6' }
        },
      }),
    [themeMode],
  );

  return (
    <div className={classes.App}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header themeMode={themeMode} setThemeMode={setThemeMode} name={properties.myName} />
        <Projects projects={properties.projects} />
        <Contacts contacts={properties.contacts} />
      </ThemeProvider>
    </div>
  );
}

export default App;
