import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
    faTwitter,
    faInstagram,
    faFacebook,
    faTelegram,
    faLinkedin,
    faGithub,
    faDiscord
} from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
    infoContact: {
        marginTop: 'auto',
        fontSize: '2.5em',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        padding: theme.spacing(1),
        backgroundColor: theme.palette.type === 'light' ? theme.palette.info.light : theme.palette.info.dark,
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
    }
}));

const Contacts = () => {

    const classes = useStyles();

    return (
        <div className={classes.infoContact}>
            <AppBar className={classes.appBar}>
                <Typography className={classes.title}>Contact Me</Typography>
                <div>
                    <Link href='https://www.linkedin.com/in/martinrouede/'>
                        <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
                    </Link>
                    <Link href='https://github.com/martinrouede/'>
                        <FontAwesomeIcon icon={faGithub} className={classes.icon} />
                    </Link>
                    <Link href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=martinrouede1@gmail.com&tf=1'>
                        <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
                    </Link>
                    <Link href='https://t.me/martinrouede/'>
                        <FontAwesomeIcon icon={faTelegram} className={classes.icon} />
                    </Link>
                    <Link href='https://discordapp.com/users/479841671950106658/'>
                        <FontAwesomeIcon icon={faDiscord} className={classes.icon} />
                    </Link>
                    <Link href='https://twitter.com/martinrouede/'>
                        <FontAwesomeIcon icon={faTwitter} className={classes.icon} />
                    </Link>
                    <Link href='https://www.instagram.com/martinrouede/'>
                        <FontAwesomeIcon icon={faInstagram} className={classes.icon} />
                    </Link>
                    <Link href='https://www.facebook.com/martinrouede/'>
                        <FontAwesomeIcon icon={faFacebook} className={classes.icon} />
                    </Link>
                </div>
            </AppBar>
        </div>
    );
}

export default Contacts;
