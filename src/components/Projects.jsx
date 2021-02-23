import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import styles from '../styles/Projects';
import GitLabChartLogo from '../logos/GitLabChart-logo.png';
import UNPSJBLogo from '../logos/UNPSJB-logo.png';

const Projects = () => {

    const classes = styles.useStyles();

    return (
        <div>
            <Typography className={classes.title}>Personal Projects</Typography>
            <Grid container className={classes.grid} spacing={5}>
                <Grid item className={classes.gridItem}>
                    <Link href='https://gitlabchart.web.app'>
                        <Paper className={classes.paper}>
                            <Typography className={classes.titlePaper}>GitLabChart</Typography>
                            <img src={GitLabChartLogo} className={classes.gitlabchart} />
                        </Paper>
                    </Link>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Link href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=martinrouede1@gmail.com&tf=1'>
                        <Paper className={classes.paper}>
                            <Typography className={classes.titlePaper}>cuidAR-UNPSJB</Typography>
                            <img src={UNPSJBLogo} className={classes.cuidar} />
                        </Paper>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default Projects;