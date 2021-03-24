import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import styles from '../styles/Projects';
//import GitLabChartLogo from '../logos/GitLabChart-logo.png';

const Projects = (params) => {

    const classes = styles.useStyles();

    return (
        <>
            <Grid container className={classes.grid} spacing={5}>
                {params.projects.map((aProject) => (
                    <Grid item className={classes.gridItem} key={aProject.name}>
                        <Link href={aProject.url}>
                            <Paper className={classes.paper} elevation={5} >
                                <Typography className={classes.titlePaper}>{aProject.name}</Typography>
                                <img src={require(`../logos/${aProject.icon}`).default} className={classes.icon} />
                            </Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Projects;