import React from "react";
import TopMenuBar from "./Components/Menu/TopMenuBar";
import { Typography, makeStyles, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Home from "./Pages/Home";

const App = () => {
  // Styles 
  const theme = useTheme();
  const styles = makeStyles({
    profile: {
      width: "100vw",
      height: "30vh",
      backgroundColor: "white"
    },
    footer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      // borderTop: "1px solid lightgrey",
      width: "100vw",
      height: "10vh",
    },
    footerText: {
      marginLeft: 10
    },
    poweredByImages: {
      "& img": {
        marginLeft: 10,
        width: 32
      }
    }
  });
  const classes = styles();

  const responsiveMenuQuery = useMediaQuery("(min-width:800px)");

  return (
    <>
      <TopMenuBar responsiveMenuQuery={responsiveMenuQuery} />
      <main>
        <Home responsiveMenuQuery={responsiveMenuQuery} />
      </main>
      <footer className={classes.footer}>
        <Typography variant="overline">Powered by</Typography>
        <div className={classes.poweredByImages}>
          <img src="/images/GitHub-Mark-32px.png" />
          <img src="/images/js-logo.png" />
          <img src="/logo192.png" />
          <img src="/images/material-ui-logo.png" />
        </div>
        <Typography variant="overline">&copy; Copyright 2021 Vinson Beduya</Typography>
      </footer>
    </>
  );
}

export default App;
