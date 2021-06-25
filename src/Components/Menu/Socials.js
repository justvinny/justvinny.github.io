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
            <Box fontWeight="900">
                <Typography>
                    SOCIALS
                </Typography>
            </Box>
            <SocialLinks />
        </div>
    )
}

export default Socials;