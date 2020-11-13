import React, { useState, useEffect } from "react";
import clsx from "clsx";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import VolumeChart from "./VolumeChart";
import VolByMuscleChart from "./VolByMuscleChart";
import ChooseMuscle from "./ChooseMuscle";
import FavoriteWorkouts from "./FavoriteWorkouts";
// some
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
  const [data, setData] = useState({
    weeklyVolume: 0,
    weeklyLifts: 0,
    weeklyExercises: 0,
    // favoriteWorkouts: ['Squats', 'Deadlifts']
  });
  const classes = useStyles();
  const { weeklyVolume, weeklyLifts, weeklyExercises, favoriteWorkouts } = data;
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  useEffect(() => {
    axios.get("/api/exercise/").then(res => {
      const weeklyVolumeLbs = setData({
        ...data,
        weeklyVolume: weeklyVolumeLbs.val,
      });
    });
  }, []);
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container spacing={3}>
        {/* Weekly Weight */}
        <Grid item xs={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            <h4>Weekly Volume</h4>
            <h1>{weeklyVolume} lbs</h1>
          </Paper>
        </Grid>
        {/* Weekly Lifts */}
        <Grid item xs={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            <h4>Lifts This Week</h4>
            <h1>{weeklyLifts}</h1>
          </Paper>
        </Grid>
        {/* Weekly total excersises */}
        <Grid item xs={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            <h4>Weekly Exercises</h4>
            <h1>{weeklyExercises}</h1>
          </Paper>
        </Grid>
        {/* Weekly Volume */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <h1>Weekly Volume</h1>
            <VolumeChart />
          </Paper>
        </Grid>
        {/* Muscles Used */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <h1>Muscles Used</h1>
            <VolByMuscleChart />
          </Paper>
        </Grid>
        {/* Favorites */}
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
