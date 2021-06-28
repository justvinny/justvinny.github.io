import React from "react";
import TopMenuBar from "./Components/Menu/TopMenuBar";
import { Typography, makeStyles, useMediaQuery, Link } from "@material-ui/core";
import { Email, LinkedIn, Instagram } from "@material-ui/icons";
import Home from "./Pages/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
    },
    contactMe: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 20,
      width: "100vw",
      border: "1px solid lightgrey"
    },
    boldText: {
      fontWeight: 900
    },
    contactLinks: {
      display: "flex",
      flexDirection: "row",
      "& *": {
        width: 32,
        height: 32,
        color: "#1e1f22"
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
              <ContactMe />
            </Route>
          </Switch>
        </main>
        <footer className={classes.footer} id="Footer">
          <div className={classes.contactMe}>
            <Typography variant="overline" className={classes.boldText}>Contact Me</Typography>
            <div className={classes.contactLinks}>
              <Typography variant="body2"><Link href="mailto: vinsonemb.151994@gmail.com"><Email /></Link></Typography>
              <Typography variant="body2"><Link href="https://www.instagram.com/vinson.beduya/" target="_blank" rel="noopener"><Instagram /></Link></Typography>
              <Typography variant="body2"><Link href="https://www.linkedin.com/in/vinson-beduya/" target="_blank" rel="noopener"><LinkedIn /></Link></Typography>
            </div>
          </div>
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
