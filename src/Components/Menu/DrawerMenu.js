import { makeStyles, Drawer, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import Socials from "./Socials";
import {Link} from "react-router-dom";

const DrawerMenu = ({ showDrawer, toggleDrawer }) => {
    // Styles
    const styles = makeStyles({
        list: {
            width: 250
        },
        listItem: {
            marginLeft: 10
        },
        listItemSocials: {
            textAlign: "center"
        },
        topMargin: {
            marginTop: 10
        }
    });
    const classes = styles();

    return (
        <Drawer anchor="right" open={showDrawer} onClose={toggleDrawer} >
            <List className={classes.list} >
                <Divider className={classes.marginTop} />
                <ListItem button>
                    <Link to="/" className="DrawerLink">Home</Link>
                </ListItem>
                <ListItem button>
                    <Link to="/projects" className="DrawerLink">Projects</Link>
                </ListItem>
                <ListItem button>
                    <Link to="/contact-me" className="DrawerLink">Contact Me</Link>
                </ListItem>
                <Divider />
                <Socials />
            </List>
        </Drawer>
    );
}

export default DrawerMenu;