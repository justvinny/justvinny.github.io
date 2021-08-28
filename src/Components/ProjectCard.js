import { makeStyles, Card, CardMedia, Typography, Link } from "@material-ui/core";
import TechnologyList from "./TechnologyList";

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
            },
            [theme.breakpoints.up("lg")]: {
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
            },
            [theme.breakpoints.up("lg")]: {
                flexDirection: "row-reverse"
            }
        },
        featuredBody: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            // [theme.breakpoints.up("md")]: {
            //     marginLeft: "5vw",
            //     marginRight: "5vw"
            // }
        },
        mobileImg: {
            width: 150,
            [theme.breakpoints.up("md")]: {
                width: 250,
                marginLeft: 40,
                marginRight: 40
            }
        },
        cardImg: {
            margin: 0,
            padding: 0,
            [theme.breakpoints.up("md")]: {
                marginLeft: 10,
                marginRight: 10
            },
            [theme.breakpoints.up("lg")]: {
                width: 450
            },
            [theme.breakpoints.up("xl")]: {
                width: "35vw"
            }
        },
        bodyText: {
            [theme.breakpoints.up("xl")]: {
                fontSize: "1vw"
            }
        },
        linkText: {
            alignSelf: "stretch",
            textAlign: "center"
        },
        boldText: {
            [theme.breakpoints.up("xl")]: {
                fontWeight: 900
            }
        },
        listGroup: {
            marginTop: 0
        }
    }));

    const classes = styles();
    let alternateFlex = false;
    return projects.map(project => {
        alternateFlex = !alternateFlex;
        return (
            <Card key={project.title} className={`${alternateFlex ? classes.featured : classes.featuredAlt} landscapeView`} elevation={5}>
                <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.imageAlt}
                    className={project.isMobile ? classes.mobileImg : classes.cardImg} />
                <div className={classes.featuredBody}>
                    <Typography variant="h6" className={`${classes.bodyText} ${classes.boldText}`}>{project.title}</Typography>
                    <Typography variant="body2" className={`${classes.linkText} ${classes.bodyText}`}><Link href={project.link} target="_blank" rel="noopener">Github Source
                        Code</Link></Typography>
                    {
                        project.liveLink
                            ? <Typography variant="body2" className={`${classes.linkText} ${classes.bodyText}`}><Link href={project.liveLink} target="_blank" rel="noopener">Live Site Link</Link></Typography>
                            : <></>
                    }
                    <TechnologyList technologies={project.technologies} />
                    <Typography variant="body2" paragraph className={classes.bodyText}>{project.shortDescription}</Typography>
                    <ul className={classes.listGroup}>
                        {project.detailedDescription.map(line => <li key={line}><Typography variant="body2" className={classes.bodyText}>{line}</Typography></li>)}
                    </ul>
                </div>
            </Card>
        )
    })
}

export default ProjectCard;