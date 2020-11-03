import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import SettingsIcon from "@material-ui/icons/Settings";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `${drawerWidth}px`,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              aria-controls="menu"
              aria-haspopup="true"
              // onClick={handleMenu}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Strength App
            </Typography>
          </Toolbar>
        </AppBar>

        <Divider />
        <List>
          {["Dashboard", "Create Workout", "Log Workout", "Progress"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 ? (
                    <HomeIcon />
                  ) : index === 1 ? (
                    <AddBoxIcon />
                  ) : index === 2 ? (
                    <FitnessCenterIcon />
                  ) : (
                    <TrendingUpIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <List>
          {["Account Details", "Sign Out"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 ? (
                  <SettingsIcon />
                ) : index === 1 ? (
                  <ExitToAppIcon />
                ) : (
                  <TrendingUpIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
