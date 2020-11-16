import React, { useState, useEffect } from "react";
import clsx from "clsx";
import axios from "axios";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Paper,
  CircularProgress,
  LinearProgress,
} from "@material-ui/core/";
import { setUserId } from "../User/UserReducer";
import { useUtils } from "../common";
import ProgressChart from "../common/components/Charts/ProgressChart";
import ProgressMenu from "../common/components/Charts/ProgressMenu";

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
}));

const Dashboard = () => {
  const classes = useStyles(); // -> Material UI Styles
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight); // -> Material UI
  const { dispatch, history } = useUtils();

  //TODO: Check Token validity.
  // Get or Set userId
  let userId = useSelector(state => state.user.curUserId);

  if (userId === null) {
    userId = localStorage.getItem("userId");
    if (!userId) {
      history.push("/");
    } else {
      dispatch(setUserId(userId));
    }
  }

  // Component State
  const [weeklyVolume, setWeeklyVolume] = useState(0);
  const [weeklyLifts, setWeeklyLifts] = useState(0);
  const [weeklyExercises, setWeeklyExercises] = useState(0);

  //

  // Functions for Calculating Data

  // setTimeout(() => {
  //   setWeeklyVolume("waa");
  // }, 5000);

  const getData = async () => {
    // Axios Request to get exercises
    try {
      // Deconstructing
      let {
        data: { isEmpty },
      } = await axios.get(`/api/exercise/check/${userId}`); //

      // isEmpty = true ? 'No data to fetch ' : 'There's data'
      if (!isEmpty) {
        let res = await axios.get("/api/exercise/user/1");

        if (res) {
          console.log(res`results console log on 81-dashboard`);
        }
      } else {
        console.log(`isEmpty ${isEmpty}`);
      }
    } catch (err) {
      if (typeof err.response !== "undefined") {
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

  const data = [
    {
      name: "Monday",
      Previous: 4000,
      Current: 2400,
      amt: 2400,
    },
    {
      name: "Tuesday",
      Previous: 3000,
      Current: 1398,
      amt: 2210,
    },
    {
      name: "Wednesday",
      Previous: 2000,
      Current: 9800,
      amt: 2290,
    },
    {
      name: "Thursday",
      Previous: 2780,
      Current: 3908,
      amt: 2000,
    },
    {
      name: "Friday",
      Previous: 1890,
      Current: 4800,
      amt: 2181,
    },
    {
      name: "Saturday",
      Previous: 2390,
      Current: 3800,
      amt: 2500,
    },
    {
      name: "Sunday",
      Previous: 3490,
      Current: 4300,
      amt: 2100,
    },
  ];

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container spacing={3}>
        {/* Weekly Weight */}
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <h4>Weekly Volume</h4>
            {weeklyVolume === null ? (
              <LinearProgress />
            ) : (
              <h1>{weeklyVolume} lbs</h1>
            )}
          </Paper>
        </Grid>
        {/* Weekly Lifts */}
        <Grid item xs={4}>
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
        <Grid item xs={4}>
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
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <ProgressMenu />
            <ProgressChart data={data} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
