import { makeStyles, Typography, Link, Avatar, Card } from "@material-ui/core";
import Socials from "../Components/Menu/Socials";

const Home = ({ responsiveMenuQuery }) => {
    // Styles
    const styles = makeStyles(theme => ({
        home: {
            display: "flex",
            flexDirection: "column",
            [theme.breakpoints.up("md")]: {
                flexDirection: "row"
            }
        },
        aboutMe: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            padding: 10,
            [theme.breakpoints.up("md")]: {
                width: "30vw",
                marginRight: 0,
                marginBottom: 10
            }
        },
        photoSize: {
            width: 250,
            height: 250,
            marginRight: 10,
            marginBottom: 10
        },
        featured: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: 10,
            padding: 10
        }
    }));
    const classes = styles();

    const description = [
        "Simple map exploration with a 2D animated character",
        "Classic turn based combat reminescent of old school J-RPGs.",
        "Random monster encounters.",
        "Treasure hunting.",
        "Challenging(?) boss battle.",
        "Inventory system where you can equip your character with items to make it stronger or heal up with",
        "Event log for player interactions with different game objects such as treasures, battles, and bosses.",
        "Map generated from ASCII text.",
        "Camera view that centers on player."
    ];

    return (
        <div className={classes.home}>
            <Card className={classes.aboutMe} elevation="5">
                <div>
                    <Avatar src="images/profile-pic.jpg" alt="A photo of myself." className={classes.photoSize} />
                    <Socials />
                </div>
                <Typography variant="body2">
                    Kia ora! I'm Vinson, a university student studying Computer Science and Software Development at
                    the Auckland University of Technology. I am particulary interested in either creating software
                    that is helpful to my daily life or making games that I find interesting. On my off days, if you
                    don't find me having a barbie with my mates or lifting iron in the gym, I'm most likely either
                    working on my dream game project or upskilling.
                </Typography>
            </Card>
            <Card className={classes.featured} elevation="5">
                <Typography variant="h5">Featured Project</Typography>
                <img src="images/rpg-project-image.JPG" width={500} alt="RPG Game Screenshot with character and golem sprite." />
                <Typography variant="h6">Basic 2D RPG Game</Typography>
                <Typography variant="body2"><Link href="https://github.com/justvinny/rpg-game-pdc" target="_blank" rel="noopener">Github Source
                    Code</Link></Typography>
                <Typography variant="body2" paragraph>
                    Animated 2D RPG Game made in Java and Swing by a team of 3 people for our Program Design and
                    Construction Paper.
                </Typography>
                <ul>
                    {description.map(line => <li key={line}><Typography variant="body2">{line}</Typography></li>)}
                </ul>
            </Card>
        </div>
    )
}

export default Home;