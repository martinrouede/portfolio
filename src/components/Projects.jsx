import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import styles from '../styles/Projects';

const Projects = (params) => {

    const classes = styles.useStyles();

    return (
        <>
            <Grid container className={classes.grid}>
                {params.projects.map((aProject) => (
                    <Grid item className={classes.gridItem} key={aProject.name}>
                        <Link href={aProject.url}>
                            <Paper className={classes.paper} elevation={5} >
                                <Typography className={classes.titlePaper}>{aProject.name}</Typography>
                                {aProject.icon ?
                                    <img src={require(`../logos/${aProject.icon}`)} className={classes.icon} />
                                    : <></>
                                }
                            </Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Projects;