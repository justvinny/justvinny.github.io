import { makeStyles, Box, Typography, Button, IconButton, Toolbar, AppBar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from "react";
import DrawerMenu from "./DrawerMenu";

const TopMenuBar = ({ responsiveMenuQuery, responsiveHeaderQuery }) => {
    // Styles
    const styles = makeStyles(theme => ({
        root: {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse"
        },
        headerName: {
            fontFamily: "Impact",
            letterSpacing: 2,
            [theme.breakpoints.up("xl")]: {
                fontSize: "1.5vw",
                fontWeight: 900
            }
        },
        appBarColor: {
            backgroundColor: "#1e1f22"
        }, 
        menuText: {
            [theme.breakpoints.up("xl")]: {
                fontSize: ".8vw",
                fontWeight: "bold"
            }
        }
    }));
    const classes = styles();

    // State
    const [showDrawer, setShowDrawer] = useState(false);

    // Helper functions
    const toggleDrawer = () => setShowDrawer(!showDrawer);

    const drawToolBar = () => {
        const menuIcon = () => {
            return (
                <IconButton color="inherit" onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
            )
        }

        if (responsiveMenuQuery) {
            return (
                <div>
                    <Button color="inherit"><Box fontWeight="fontWeightBold" className={classes.menuText}>Contact Me</Box></Button>
                    <Button color="inherit"><Box fontWeight="fontWeightBold" className={classes.menuText}>Projects</Box></Button>
                    <Button color="inherit"><Box fontWeight="fontWeightBold" className={classes.menuText}>Home</Box></Button>
                    {menuIcon()}
                </div>
            )
        } else {
            return menuIcon();
        }
    }

    const drawHeader = () => {
        if (responsiveHeaderQuery) {
            return (
                <Typography variant="h4" className={classes.headerName}>
                    PORTFOLIO
                </Typography>
            )
        } else {
            return (
                <Typography variant="h5" className={classes.headerName}>
                    PORTFOLIO
                </Typography>
            )
        }
    }

    return (
        <div>
            <AppBar position="sticky" className={classes.appBarColor}>
                <Toolbar className={classes.root}>
                    {drawToolBar()}
                    {drawHeader()}
                </Toolbar>
            </AppBar>
            <DrawerMenu showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
        </div>
    )
};

export default TopMenuBar;