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
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

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
  const [allExercises, setAllExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState("");
  const [reRender, setReRender] = useState(true); // Boolean For useEffect -> To Prevent Re Renders
  const [allExercisesByName, setAllExercisesByName] = useState([]);

  // Pull Data from Db

  useEffect(() => {
    if (reRender) {
      // Get Workout List from Backend
      axios.get(`/api/exercise/user/${userId}`).then(({ data }) => {
        // Save Full Object to state
        setAllExercises(data);
        console.log(data);
        // Get Names and IDs from workouts
        const resExerciseNames = data.map(exercise => exercise.exerciseName);
        // const resWorkoutIds = data.map((workout) => workout.id);

        setAllExercises(resExerciseNames);
        // setWorkoutIds(resWorkoutIds);
        setReRender(false);

        console.log(`Log Component Rendered`, resExerciseNames);
      }); // Axios Get
    }
  }, [reRender, selectedExercise]);

  const filterExercises = () => {
    let tempArr;

    allExercises.forEach(exercise => {
      if (exercise.exerciseName === selectedExercise) {
        console.log(`pass`);

        tempArr = exercise.exerciseName;
      }
    });

    // Set Exercise List
    setAllExercisesByName(JSON.parse(tempArr));
  };

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
      date: 2020 - 11 - 11,
      Weight: 4000,
    },
    {
      date: 2020 - 11 - 12,
      Weight: 2000,
    },
    {
      date: 2020 - 11 - 13,
      Weight: 4000,
    },
    {
      date: 2020 - 11 - 14,
      Weight: 3000,
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
        {/* Weekly total exercises */}
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
            {/* <ProgressMenu /> */}
            <FormControl className={classes.centerInput}>
              <Autocomplete
                id="exerciseChart"
                options={allExercises}
                getOptionLabel={option => option}
                onChange={(event, newValue) => setSelectedExercise(newValue)}
                style={{ width: 400 }}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="Choose your Exercise"
                    variant="outlined"
                  />
                )}
              />
            </FormControl>
            <ProgressChart data={data} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
