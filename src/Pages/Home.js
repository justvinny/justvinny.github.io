import { makeStyles, Typography, Avatar, Card } from "@material-ui/core";
import Socials from "../Components/Menu/Socials";
import ProjectCard from "../Components/ProjectCard";
import {featuredOngoingProject, featuredProjects} from "../Components/Projects/ProjectData";

const Home = () => {
    // Styles
    const styles = makeStyles((theme) => ({
        home: {
            display: "flex",
            flexDirection: "column"
        },
        aboutMe: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
            padding: 10,
            [theme.breakpoints.up("md")]: {
                flexDirection: "row",
                marginLeft: "10vw",
                marginRight: "10vw"
            }
        },
        avatarSize: {
            width: 250,
            height: 250,
            marginRight: 10,
            marginBottom: 10,
            [theme.breakpoints.up("xl")]: {
                width: "15vw",
                height: "15vw"
            }
        },
        photoSize: {
            width: 500,
            height: 350,
            marginRight: 10,
            marginBottom: 10,
        },
        featured: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
            [theme.breakpoints.up("md")]: {
                marginLeft: "10vw",
                marginRight: "10vw"
            }
        },
        featuredHeader: {
            marginLeft: 10,
            marginRight: 10,
            paddingTop: 15,
            paddingBottom: 15,
            borderRadius: 0,
            backgroundColor: "#1e1f22",
            [theme.breakpoints.up("md")]: {
                marginLeft: "10vw",
                marginRight: "10vw"
            }
        },
        featuredText: {
            textAlign: "center",
            marginLeft: 10,
            marginRight: 10,
            backgroundColor: "#1e1f22",
            color: "#fff",
            fontFamily: "Impact",
            letterSpacing: 2,
            [theme.breakpoints.up("md")]: {
                marginLeft: "10vw",
                marginRight: "10vw"
            },
            [theme.breakpoints.up("xl")]: {
                fontSize: "1.5vw"
            }
        }, aboutMeText: {
            [theme.breakpoints.up("xl")]: {
                fontSize: "1.0vw"
            },
            textAlign: "justify",
        }
    }));
    const classes = styles();

    const aboutMe = {
        name: "Vinson",
        avatar: "images/profile-pic.jpg",
        avatarAlt: "A photo of myself.",
        summary: `Kia ora! I'm Vinson. I'm a Software Engineering Intern at Xero and a final year university student studying Software Development at
        the Auckland University of Technology. I am particulary interested in either creating software
        that is helpful to my daily life or making games that I find interesting. On my off days, if you
        don't find me having a barbie with my mates or lifting iron in the gym, I'm most likely either making my
        dream game project or upskilling my programming skills.`
    }

    return (
        <div className={classes.home}>
            <Card className={classes.aboutMe} elevation={5}>
                <div>
                    <Avatar src={aboutMe.avatar} alt={aboutMe.avatarAlt} className={classes.avatarSize} />
                    <Socials />
                </div>
                <Typography variant="body2" className={classes.aboutMeText} >
                    {aboutMe.summary}
                </Typography>
            </Card>
            <Card className={classes.featuredHeader} elevation={5}>
                <Typography variant="h5" className={classes.featuredText}>FEATURED PROJECTS</Typography>
            </Card>
            <ProjectCard projects={featuredProjects} />
            <Card className={classes.featuredHeader} elevation={5}>
                <Typography variant="h5" className={classes.featuredText}>FEATURED ONGOING PROJECT</Typography>
            </Card>
            <ProjectCard projects={featuredOngoingProject} />
        </div>
    )
}

export default Home;