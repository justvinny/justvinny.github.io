import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SocialLinks from "../SocialsLinks";

const Socials = () => {
    const styles = makeStyles({
        socials: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
    });
    const classes = styles();

    return (
        <div className={classes.socials}>
            <Typography>
                <Box fontWeight="900">SOCIALS</Box>
            </Typography>
            <SocialLinks />
        </div>
    )
}

export default Socials;