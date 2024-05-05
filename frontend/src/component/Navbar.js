import React from "react";
import { AppBar, Toolbar, Typography, Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import logo from "./logo.png";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center", // Align items vertically
    color: "#fff", // White color for title text
    fontFamily: "cursive", // Custom font family
    fontSize: "24px", // Adjust the font size as needed
  },
  logo: {
    width: 40, // Adjust the width of the logo as needed
    height: 40, // Adjust the height of the logo as needed
    borderRadius: "50%", // Make it circular
    marginRight: theme.spacing(1), // Add some margin to separate from the title text
  },
  button: {
    margin: theme.spacing(0, 1),
    borderRadius: "20px",
    color: "#fff", // White color for button text
    '&:hover': {
      backgroundColor: "#FFFFFF", // White background color on hover
      color: "#000", // Black text color on hover
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: "#1976D2" }}> {/* Blue background color for AppBar */}
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <img src={logo} alt="Logo" className={classes.logo} />
          JobGenie
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/logout")}>
                Logout <ExitToAppIcon />
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/applications")}>
                Applications
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/logout")}>
                Logout <ExitToAppIcon />
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" className={classes.button} onClick={() => handleClick("/login")}>
              <PersonIcon /> {/* Login Icon */}
              Login
            </Button>
            <Button color="inherit" className={classes.button} onClick={() => handleClick("/signup")}>
              <LockOpenIcon /> {/* Signup Icon */}
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
