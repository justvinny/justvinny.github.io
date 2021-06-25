import { makeStyles, Drawer, Divider, List, ListItem, ListItemText } from "@material-ui/core";
import Socials from "./Socials";

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
                    <ListItemText className={classes.listItem} primary={"HOME"}></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText className={classes.listItem} primary={"PROJECTS"}></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText className={classes.listItem} primary={"CONTACT ME"}></ListItemText>
                </ListItem>
                <Divider />
                <Socials />
            </List>
        </Drawer>
    );
}

export default DrawerMenu;