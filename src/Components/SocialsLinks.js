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

    return (
        <div className={classes.imageContainer}>
            <Link href="https://github.com/justvinny" target="_blank" rel="noopener">
                <IconButton>
                    <img className={classes.imageLink} src="/images/GitHub-Mark-32px.png" />
                </IconButton>
            </Link>
            <Link href="https://www.instagram.com/vinson.beduya/" target="_blank" rel="noopener">
                <IconButton>
                    <img className={classes.imageLink} src="/images/Instagram_AppIcon_Aug2017.png" />
                </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/vinson-beduya/" target="_blank" rel="noopener">
                <IconButton>
                    <img className={classes.imageLink} src="/images/Li-In-Bug.png" />
                </IconButton>
            </Link>
        </div>
    )
}

export default SocialLinks;