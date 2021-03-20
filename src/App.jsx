import React, { useEffect, useState } from 'react';

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
    height: '100vh',
    width: '99vw',
    flexDirection: 'column',
    padding: theme.spacing(2)
  }
}));

const App = () => {

  const classes = useStyles();
  const [userContacts, setUserContacts] = useState([]);
  const [themeMode, setThemeMode] = useState(true);

  var theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themeMode ? 'dark' : 'light',
          primary: { main: '#1E77A5' },
          secondary: { main: '#6AF2D8' }
        },
      }),
    [themeMode],
  );

  return (
    <div className={classes.App}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header themeMode={themeMode} setThemeMode={setThemeMode} name={properties.myName} />
        <Projects projects={properties.projects}/>
        <Contacts contacts={properties.contacts} />
      </ThemeProvider>
    </div>
  );
}

export default App;
