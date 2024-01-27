import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grid: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(25),
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(10),
        },
    },
    gridItem: {
        margin: 15,
        width: '20%',
        minWidth: '250px'
    },
    paper: {
        backgroundColor: theme.palette.action.hover,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(1),
        },
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing(2),
        },
    },
    titlePaper: {
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.1rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.3rem',
        },
    },
    icon: {
        [theme.breakpoints.down('sm')]: {
            width: '100px',
            height: '100px'
        },
        [theme.breakpoints.up('md')]: {
            width: '120px',
            height: '120px'
        },
        [theme.breakpoints.up('lg')]: {
            width: '150px',
            height: '150px'
        },
    }
}));

const styles = {
    useStyles
};

export default styles;