import React from "react";
import TopMenuBar from "./Components/Menu/TopMenuBar";
import { Typography, makeStyles, useMediaQuery } from "@material-ui/core";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./Pages/Projects";
import ContactMe from "./Pages/ContactMe";
const App = () => {
  // Styles 
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
  const responsiveHeaderQuery = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Router>
        <TopMenuBar responsiveMenuQuery={responsiveMenuQuery} responsiveHeaderQuery={responsiveHeaderQuery} />

        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/contact-me">
              <ContactMe/>
            </Route>
          </Switch>
        </main>
        <footer className={classes.footer}>
          <Typography variant="overline">Powered by</Typography>
          <div className={classes.poweredByImages}>
            <img src="/images/GitHub-Mark-32px.png" alt="Github Logo" />
            <img src="/images/js-logo.png" alt="Javascript Logo" />
            <img src="/logo192.png" alt="React Logo" />
            <img src="/images/material-ui-logo.png" alt="Material UI Logo" />
          </div>
          <Typography variant="overline">&copy; Copyright 2021 Vinson Beduya</Typography>
        </footer>
      </Router>
    </>
  );
}

export default App;