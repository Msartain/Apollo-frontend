import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Nav: {
    display: "flex",
    width: "100vw"
  },
  logo: {
    display: "flex"
  },
  links: {
    display: "flex",
    "& p": {
      margin: 0
    }
  }
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.Nav}>
      <div className={classes.logo}>
        <img src="../images/logo.png" alt="logo" />
        <div className={classes.links}>
          <p>Features</p>
          <p>Domains</p>
          <p>Pricing</p>
          <p>Enterprise</p>
        </div>
      </div>
      <div className="login">
        <span>Login</span>
        <span>Sign Up</span>
      </div>
    </div>
  );
};

export default Nav;
