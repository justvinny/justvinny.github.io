import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SocialLinks from "../SocialsLinks";

const Socials = () => {
    const styles = makeStyles({
        socials: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        boldText: {
            fontWeight: "900"
        }
    });
    const classes = styles();

    return (
        <div className={classes.socials}>
                <Typography className={classes.boldText}>
                    SOCIALS
                </Typography>
            <SocialLinks />
        </div>
    )
}

export default Socials;