import { makeStyles, Card, CardMedia, Typography, Link } from "@material-ui/core";

const ProjectCard = ({ projects }) => {
    // Styles
    const styles = makeStyles(theme => ({
        featured: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            [theme.breakpoints.up("md")]: {
                marginLeft: "10vw",
                marginRight: "10vw",
                flexDirection: "row"
            }
        }, 
        featuredAlt: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            [theme.breakpoints.up("md")]: {
                marginLeft: "10vw",
                marginRight: "10vw",
                flexDirection: "row-reverse"
            }
        },
        featuredBody: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            [theme.breakpoints.up("md")]: {
                marginLeft: "10vw",
                marginRight: "10vw"
            }
        },
        cardImg: {
            margin: 0,
            padding: 0
        }
    }));

    const classes = styles();
    let alternateFlex = false;
    return projects.map(project => {
        alternateFlex = !alternateFlex;
        return (
            <Card key={project.title} className={alternateFlex ? classes.featured : classes.featuredAlt} elevation={5}>
                <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.imageAlt}
                    className={classes.cardImg} />
                <div className={classes.featuredBody}>
                    <Typography variant="h6">{project.title}</Typography>
                    <Typography variant="body2"><Link href={project.link} target="_blank" rel="noopener">Github Source
                        Code</Link></Typography>
                    <Typography variant="body2" paragraph>{project.shortDescription}</Typography>
                    <ul>
                        {project.detailedDescription.map(line => <li key={line}><Typography variant="body2">{line}</Typography></li>)}
                    </ul>
                </div>
            </Card>
        )
    })
}

export default ProjectCard;