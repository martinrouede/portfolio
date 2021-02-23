import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

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
        fontSize: '3em',
    },
    icon: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
        '&:hover': {
            color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
        }
    }
}));

const Contacts = () => {

    const classes = useStyles();

    return (
        <div className={classes.infoContact}>
            <Link href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=martinrouede1@gmail.com&tf=1'>
                <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
            </Link>
            <Link href='https://www.linkedin.com/in/martinrouede/'>
                <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
            </Link>
            <Link href='https://github.com/martinrouede/'>
                <FontAwesomeIcon icon={faGithub} className={classes.icon} />
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
    );
}

export default Contacts;
