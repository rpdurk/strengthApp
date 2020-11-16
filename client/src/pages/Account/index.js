import React from "react";
import { Container, Grid, makeStyles, Box } from "@material-ui/core";
import Profile from "./Profile";
import ProfileDetails from "./ProfileDetails";

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(5),
  },
  header: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(7),
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerPadding: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const Account = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Container className={classes.header}>
        <Box border={1} borderRadius={16} className={classes.headerPadding}>
          <h1>Account</h1>
        </Box>
      </Container>
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <Profile />
        </Grid>
        <Grid item lg={8} md={6} xs={12}>
          <ProfileDetails />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account;
