import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab);

const useStyles = makeStyles((theme) => ({
    infoContact: {
        marginTop: 'auto',
        fontSize: '2.5em',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        padding: theme.spacing(1),
        background: theme.palette.type === 'dark' ?
            `linear-gradient(10deg, ${theme.palette.secondary.dark} 25%, ${theme.palette.primary.dark} 75%)`
            :
            `linear-gradient(10deg, ${theme.palette.secondary.light} 25%, ${theme.palette.primary.light} 75%)`,
        color: theme.palette.text.primary,
    },
    title: {
        marginBottom: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.3rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.4rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1.5rem',
        },
    },
    icon: {
        flexDirection: 'row',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(2),
        color: theme.palette.text.primary,
        '&:hover': {
            color: theme.palette.text.secondary,
        }
    }
}));

const Contacts = (params) => {

    const classes = useStyles();

    return (
        <div className={classes.infoContact}>
            <AppBar className={classes.appBar}>
                <Typography className={classes.title}>Contact Me</Typography>
                <div>
                    {params.contacts.map((aContact) => (
                        <Link href={`${aContact.url}${aContact.user}/`} key={aContact.name} className={classes.icon}>
                            <FontAwesomeIcon icon={['fab', aContact.name]} />
                        </Link>
                    ))}
                </div>
            </AppBar>
        </div>
    );
}

export default Contacts;
