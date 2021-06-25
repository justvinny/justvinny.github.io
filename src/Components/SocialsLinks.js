import { makeStyles, Link, IconButton } from "@material-ui/core";

const SocialLinks = () => {
    const styles = makeStyles({
        imageContainer: {
            flex: 1,
            display: "flex",
            flexDirection: "row",
        },
        imageLink: {
            height: 32,
            width: 32
        }
    });
    const classes = styles();

    const socials = [
        {
            name: "Github",
            link: "https://github.com/justvinny",
            image: "/images/GitHub-Mark-32px.png",
            imageAlt: "Github Logo"
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/vinson.beduya/",
            image: "/images/Instagram_AppIcon_Aug2017.png",
            imageAlt: "Instagram Logo"
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/vinson-beduya/",
            image: "/images/LI-In-Bug.png",
            imageAlt: "LinkedIn Logo"
        }
    ]

    return (
        <div className={classes.imageContainer}>
            {socials.map(social => {
                return (
                    <Link href={social.link} target="_blank" rel="noopener" key={social.name}>
                        <IconButton>
                            <img className={classes.imageLink} src={social.image} alt={social.imageAlt} />
                        </IconButton>
                    </Link>
                )
            })}
        </div>
    )
}

export default SocialLinks;