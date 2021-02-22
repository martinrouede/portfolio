import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import GitLabChartLogo from '../GitLabChart-logo.png';
import UNPSJBLogo from '../UNPSJB-logo.png';

const useStyles = makeStyles((theme) => ({
    grid: {
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: theme.spacing(5)
    },
    gridItem: {
        width: '20%',
    },
    paper: {
        padding: theme.spacing(2),
    }
}));

const Projects = params => {

    const classes = useStyles();

    return (
        <div>
            <Typography>Personal Projects</Typography>
            <Grid container className={classes.grid} spacing={5}>
                <Grid item className={classes.gridItem}>
                    <Link href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=martinrouede1@gmail.com&tf=1'>
                        <Paper className={classes.paper}>
                            <Typography>GitLabChart</Typography>
                            <img src={GitLabChartLogo} width='100' height='100' />
                        </Paper>
                    </Link>
                </Grid>
                <Grid item className={classes.gridItem}>
                <Link href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=martinrouede1@gmail.com&tf=1'>
                    <Paper className={classes.paper}>
                            <Typography>cuidAR-UNPSJB</Typography>
                            <img src={UNPSJBLogo} width='85' height='100' />
                    </Paper>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default Projects;