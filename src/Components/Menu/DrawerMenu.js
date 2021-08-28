import { makeStyles, Drawer, Divider, List, ListItem } from "@material-ui/core";
import Socials from "./Socials";
import {Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const DrawerMenu = ({ showDrawer, toggleDrawer, scrollToTop }) => {
    // Styles
    const styles = makeStyles({
        list: {
            width: 275
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
    const toggleAndScrollToTop = () => {
        scrollToTop();
        toggleDrawer();
    }

    return (
        <Drawer anchor="right" open={showDrawer} onClose={toggleDrawer} >
            <List className={classes.list} >
                <Divider className={classes.marginTop} />
                <ListItem button onClick={toggleAndScrollToTop}>
                    <Link to="/" className="DrawerLink">Home</Link>
                </ListItem>
                <ListItem button onClick={toggleAndScrollToTop}>
                    <Link to="/projects" className="DrawerLink">Projects</Link>
                </ListItem>
                <ListItem button onClick={toggleAndScrollToTop}>
                    <Link to="/ongoing-projects" className="DrawerLink">Ongoing Projects</Link>
                </ListItem>
                <ListItem button onClick={toggleDrawer}>
                    <HashLink to="#Footer" className="DrawerLink">Contact Me</HashLink>
                </ListItem>
                <Divider />
                <Socials />
            </List>
        </Drawer>
    );
}

export default DrawerMenu;