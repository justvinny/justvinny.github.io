import {  makeStyles, Box, Typography, Button, IconButton, Toolbar, AppBar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from "react";
import DrawerMenu from "./DrawerMenu";

const TopMenuBar = ({ responsiveMenuQuery }) => {
    // Styles
    const styles = makeStyles({
        root: {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse"
        },
        headerName: {
            fontFamily: "Impact",
            letterSpacing: 2
        }
    });
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
                    <Button color="inherit"><Box fontWeight="fontWeightBold">Contact Me</Box></Button>
                    <Button color="inherit"><Box fontWeight="fontWeightBold">Projects</Box></Button>
                    <Button color="inherit"><Box fontWeight="fontWeightBold">Home</Box></Button>
                    {menuIcon()}
                </div>
            )
        } else {
            return menuIcon();
        }
    }

    return (
        <>
            <AppBar position="sticky">
                <Toolbar className={classes.root}>
                    {drawToolBar()}
                    <Typography variant="h4" className={classes.headerName}>
                        PORTFOLIO
                    </Typography>
                </Toolbar>
            </AppBar>
            <DrawerMenu showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
        </>
    )
};

export default TopMenuBar;