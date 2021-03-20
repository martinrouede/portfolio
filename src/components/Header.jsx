import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

import SwitchTheme from './SwitchTheme';

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
        color: theme.palette.text.primary,
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.3rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.4rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.5rem',
        },
    }
}));

const Header = params => {

    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.appBar}>
                <Grid container direction='row' justify='center' alignItems='center'>
                    <Typography className={classes.title}>{params.name} - My Personal Projects</Typography>
                </Grid>
                <Grid container direction='row' justify='flex-end' alignItems='center'>
                    <SwitchTheme themeMode={params.themeMode} setThemeMode={params.setThemeMode} />
                </Grid>
            </AppBar>
        </>
    );
}

export default Header;