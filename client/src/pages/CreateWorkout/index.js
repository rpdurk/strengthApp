import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Container,
  TextField,
  Button,
  Box,
  Icon,
  FormControl,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useUtils } from "../common";
import { setUserId } from "../User/UserReducer";
// import { FormControl } from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  createBtn: {
    fontSize: 20,
  },

  row: {
    marginTop: theme.spacing(2),
  },
}));

export default function CreateWorkout() {
  const [exerciseList, setExerciseList] = useState([]);
  const [workoutName, setWorkoutName] = useState("");
  const [exercise, setExercise] = useState([]);
  const [workoutNameErr, setWorkoutNameErr] = useState(false);
  const [exerciseNameErr, setExerciseNameErr] = useState(false);

  const { dispatch, history } = useUtils();

  let userId = useSelector(state => state.user.curUserId);

  if (userId === null) {
    userId = localStorage.getItem("userId");
    if (!userId) {
      history.push("/");
    } else {
      dispatch(setUserId(userId));
    }
  }

  // Component Variables
  let counter = 0;
  let workoutObj = {};
  let newExercise = {
    value: "",
  };

  // Create Workout click
  const handleSubmit = e => {
    e.preventDefault();

    //Requires workout name
    if (workoutName === "") {
      setWorkoutNameErr(true);
      setTimeout(() => {
        setWorkoutNameErr(false);
      }, 3000);
    } else {
      let tempArr = [];

      // Loop through and reset
      for (let i = 0; i <= counter; i++) {
        let value = document.getElementById(`exercise${i}`).value;

        // Exercise name input error
        if (value === "") {
          setExerciseNameErr(true);
        } else {
          tempArr.push(value);
          document.getElementById(`exercise${i}`).value = "";
        }
      }

      newExercise = {
        value: "",
      };

      setExercise([newExercise]);
      let exercises = JSON.stringify(tempArr);

      workoutObj = {
        workoutName,
        userId,
        exercises,
      };

      // Axios push
      axios.post("/api/workout/addWorkout", workoutObj).then(res => {
        console.log(res.data);
      });

      // Clears exercises
      counter = 0;
      setExercise([]);
      setWorkoutName("");
    }
  };

  const classes = useStyles();

  useEffect(() => {
    // Runs after the first render() lifecycle
    axios
      .get("https://wger.de/api/v2/exercise/?language=2&limit=999&ordering=id")
      .then(res => {
        // Filter out exercises with no muscle details
        const exerciseResultsList = res.data.results.filter(exercise => {
          return exercise.muscles.length !== 0 && exercise.name;
        });
        const exerciseList = exerciseResultsList.map(singleExercise => {
          const exerciseName = singleExercise.name;
          //   console.log(exerciseName);
          return exerciseName;
          // return exerciseName.toLowerCase();
        });
        setExerciseList(exerciseList);
      });
  }, []);
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Box>
        {workoutNameErr ? (
          <TextField
            error
            variant="outlined"
            id={workoutNameErr ? "outlined-error-helper-text" : "email"}
            label={workoutNameErr ? "Enter workout name" : "Workout Name"}
            name="workoutName"
            onChange={e => setWorkoutName(e.target.value)}
          />
        ) : (
          <TextField
            required
            variant="outlined"
            id="workoutName"
            label="Workout Name"
            name="workoutName"
            onChange={e => setWorkoutName(e.target.value)}
          />
        )}
      </Box>
      <Container className={classes.paper} component={Paper}>
        <Box className={classes.addBtn}>
          <Button
            onClick={e => {
              e.preventDefault();
              const newExercise = {
                value: "",
              };
              setExercise([...exercise, newExercise]);
            }}
            color="primary"
            variant="contained"
          >
            Add Exercise
            <Icon
              className="fa fa-plus-circle"
              style={{ marginLeft: "1rem" }}
            />
          </Button>
        </Box>
        {exercise.map((_element, index) => {
          counter = index;
          return (
            <div className={classes.row}>
              <Autocomplete
                id={`exercise${index}`}
                options={exerciseList}
                getOptionLabel={option => option}
                style={{ width: 400 }}
                renderInput={params => (
                  <TextField
                    required
                    {...params}
                    label="Choose exercise"
                    variant="outlined"
                  />
                )}
              />
            </div>
          );
        })}
      </Container>
      <Box>
        <Button
          className={classes.createBtn}
          onClick={handleSubmit}
          color="primary"
          variant="contained"
        >
          Create Workout
        </Button>
      </Box>
    </Container>
  );
}
