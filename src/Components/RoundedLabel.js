import { Typography } from "@material-ui/core";
import "../styles/RoundedLabel.css";

const RoundedLabel = ({ text }) => {

    return (
        <div className="RoundedContainer">
            <Typography variant="overline" color="inherit" className={`text MuiTypography-overline`}>
                {text}
            </Typography>
        </div>
    )
}

export default RoundedLabel;