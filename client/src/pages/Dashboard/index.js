import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import VolumeChart from './VolumeChart';
import VolByMuscleChart from './VolByMuscleChart';
import ChooseMuscle from './ChooseMuscle';
import FavoriteWorkouts from './FavoriteWorkouts';
import { useSelector } from 'react-redux';
import { setUserId } from '../User/UserReducer';
import { useUtils } from '../common';
import { CircularProgress, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    margin: '0 auto',
    overflow: 'auto',
    flexDirection: 'column',
    textAlign: 'center',
  },
  fixedHeight: {
    height: 350,
  },
  // thumbnail: {
  //   width: 400,
  // },
}));

const Dashboard = () => {
  const classes = useStyles(); // -> Material UI Styles
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight); // -> Material UI
  const { dispatch, history } = useUtils();

  //TODO: Check Token validity.
  // Get or Set userId
  let userId = useSelector((state) => state.user.curUserId);

  if (userId === null) {
    userId = localStorage.getItem('userId');
    if (!userId) {
      history.push('/');
    } else {
      dispatch(setUserId(userId));
    }
  }

  // Component State
  const [weeklyVolume, setWeeklyVolume] = useState(null);
  const [weeklyLifts, setWeeklyLifts] = useState(null);
  const [weeklyExercises, setWeeklyExercises] = useState(null);
  const [favoriteWorkouts, setFavoriteWorkouts] = useState(null);

  // Functions for Calculating Data

  setTimeout(() => {
    setWeeklyVolume('waa');
  }, 5000);

  const getData = async () => {
    // Axios Request to get exercises
    try {
      // Deconstructing
      let {
        data: { isEmpty },
      } = await axios.get(`/api/exercise/check/${userId}`); //

      // isEmpty = true ? 'No data to fetch ' : 'There's data'
      if (!isEmpty) {
        let res = await axios.get('/api/exercise/user/1');

        if (res) {
          console.log(res);
        }
      } else {
        console.log(`isEmpty ${isEmpty}`);
      }
    } catch (err) {
      if (typeof err.response !== 'undefined') {
        switch (err.response.status) {
          case 400: {
            console.log(`Bad Request`);
            break;
          }
          case 401: {
            console.log(`Bad Request`);
            break;
          }
          default:
            console.log(`another one`);
            console.log(err);
            break;
        }
      }
    }
  };

  // Calculate Data
  useEffect(() => {
    console.log(`DASHBOARD USEFFECT`);
    getData();
  }, []);

  return (
    <Container maxWidth='xl' className={classes.container}>
      <Grid container spacing={3}>
        {/* Weekly Weight */}
        <Grid item xs={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            <h4>Weekly Volume</h4>
            {/* <h1>{weeklyVolume} lbs</h1> */}

            {weeklyVolume === null ? (
              <LinearProgress />
            ) : (
              <h1>{weeklyVolume} lbs</h1>
            )}
          </Paper>
        </Grid>
        {/* Weekly Lifts */}
        <Grid item xs={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            <h4>Lifts This Week</h4>
            {/* <h1>{weeklyLifts}</h1> */}
            {weeklyVolume === null ? (
              <LinearProgress />
            ) : (
              <h1>{weeklyLifts} lbs</h1>
            )}
          </Paper>
        </Grid>
        {/* Weekly total excersises */}
        <Grid item xs={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            <h4>Weekly Exercises</h4>
            {/* <h1>{weeklyExercises}</h1> */}
            {weeklyVolume === null ? (
              <LinearProgress />
            ) : (
              <h1>{weeklyExercises} lbs</h1>
            )}
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
