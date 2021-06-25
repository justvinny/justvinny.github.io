import { makeStyles, Typography, Avatar, Card } from "@material-ui/core";
import Socials from "../Components/Menu/Socials";
import ProjectCard from "../Components/ProjectCard";

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
            }
        }
    }));
    const classes = styles();

    const projects = [
        {
            title: "Basic 2D RPG Game",
            image: "images/rpg-project-image.JPG",
            iamgeAlt: "RPG Game Screenshot with character and golem sprite.",
            link: "https://github.com/justvinny/rpg-game-pdc",
            shortDescription: "Animated 2D RPG Game made in Java and Swing by a team of 3 people for our Program Design and "
                + "Construction Paper.",
            detailedDescription: [
                "Simple map exploration with a 2D animated character",
                "Classic turn based combat reminescent of old school J-RPGs.",
                "Random monster encounters.",
                "Treasure hunting.",
                "Challenging(?) boss battle.",
                "Inventory system where you can equip your character with items to make it stronger or heal up with",
                "Event log for player interactions with different game objects such as treasures, battles, and bosses.",
                "Map generated from ASCII text.",
                "Camera view that centers on player."
            ]
        },
        {
            title: "Password Manager (Android)",
            image: "images/password-manager-screens-p1.png",
            iamgeAlt: "Password Manager Android Application Screenshot",
            link: "https://github.com/justvinny/pass-vault-java-android",
            shortDescription: "Native android password manager application to manage all my passwords. No more getting locked out by Study Link!",
            detailedDescription: [
                "Store accounts to persistent storage.",
                "View accounts stored and copy password to clipboard.",
                "Delete accounts from persistent storage.",
                "Random password generator.",
                "Username search feature.",
                "Account sorting feature.",
                "Import/Export CSV feature.",
                "Create passcode and login feature using SharedPreferences."
            ]
        }
    ];

    const aboutMe = {
        name: "Vinson",
        avatar: "images/profile-pic.jpg",
        avatarAlt: "A photo of myself.",
        summary: `Kia ora! I'm Vinson, a university student studying Computer Science and Software Development at
        the Auckland University of Technology. I am particulary interested in either creating software
        that is helpful to my daily life or making games that I find interesting. On my off days, if you
        don't find me having a barbie with my mates or lifting iron in the gym, I'm most likely either`
    }


    return (
        <div className={classes.home}>
            <Card className={classes.aboutMe} elevation={5}>
                <div>
                    <Avatar src={aboutMe.avatar} alt={aboutMe.avatarAlt} className={classes.avatarSize} />
                    <Socials />
                </div>
                <Typography variant="body2">
                    {aboutMe.summary}
                </Typography>
            </Card>
            <Card className={classes.featuredHeader} elevation={5}>
                <Typography variant="h5" className={classes.featuredText}>FEATURED PROJECTS</Typography>
            </Card>
            <ProjectCard projects={projects} />
        </div>
    )
}

export default Home;