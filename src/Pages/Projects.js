import { projectData } from "../Components/Projects/ProjectData";
import ProjectCard from "../Components/ProjectCard";
import { makeStyles } from "@material-ui/core";

const Projects = () => {
    const styles = makeStyles({
        root: {
            marginTop: 10
        }
    });

    const classes = styles();

    return (
        <div className={classes.root}>
            <ProjectCard projects={projectData} />
        </div>
    )
}

export default Projects;