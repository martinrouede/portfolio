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
        background: theme.palette.type === 'dark' ?
        `linear-gradient(10deg, ${theme.palette.primary.dark} 25%, ${theme.palette.secondary.dark} 75%)`
        :
        `linear-gradient(10deg, ${theme.palette.primary.light} 25%, ${theme.palette.secondary.light} 75%)`,
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