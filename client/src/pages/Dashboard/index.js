import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import VolumeChart from "../common/components/charts/VolumeChart";
import VolByMuscleChart from "../common/components/charts/VolByMuscleChart";
import ChooseMuscle from "../common/components/ChooseMuscle";
import FavoriteWorkouts from "../common/components/FavoriteWorkouts";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    margin: "0 auto",
    overflow: "auto",
    flexDirection: "column",
    textAlign: "center",
  },
  fixedHeight: {
    height: 350,
  },
  // thumbnail: {
  //   width: 400,
  // },
}));

const Dashboard = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            <h4>Weekly Weight Lifted</h4>
            <h1>1500 lbs</h1>
          </Paper>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            <h4>Lifts This Week</h4>
            <h1>7</h1>
          </Paper>
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            <h4>Total Exercises</h4>
            <h1>14</h1>
          </Paper>
        </Grid>
        {/* Weekly Volume */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <h1>Weekly Volume</h1>
            <VolumeChart />
          </Paper>
        </Grid>
        {/* Volume By Muscle */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <h1>Muscles Used</h1>
            <VolByMuscleChart />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <h1>Favorite Workouts</h1>
            <FavoriteWorkouts />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={classes.paper}>
            <h1>Choose Muscle</h1>
            <ChooseMuscle />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
