import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Select from '@material-ui/core/Select';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';
import { CircularProgress, LinearProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useUtils } from '../common';
import { setUserId } from '../User/UserReducer';
import uniqid from 'uniqid';
import {
  FilledInput,
  Grid,
  InputAdornment,
  OutlinedInput,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
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
  doneButton: {
    marginTop: theme.spacing(2),
    width: '13ch',
  },
  select: {
    width: '70ch',
    display: 'flex',
    margin: '0 auto',
    overflow: 'auto',
    flexDirection: 'column',
    textAlign: 'center',
    marginBottom: theme.spacing(6),
  },
  iconButton: {
    width: '6ch',
  },

  marginRightAuto: {
    marginRight: 'auto',
    marginLeft: '1rem',
  },

  marginLeftAuto: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },

  centerInput: {
    margin: '1rem auto',
    textAlign: 'center',
  },

  table: {
    minWidth: 750,
    margin: '0 auto',
    alignItems: 'center',
    border: 0,
  },
  titleFont: {
    fontWeight: '400',
  },
  centerText: {
    textAlign: 'center',
  },
  marginOne: {
    margin: '1rem',
  },
  marginLR: {
    margin: '0 1rem',
  },
  alert: {
    color: '#FF5722',
    maxWidth: '25%',
    margin: '0.4rem auto',
  },
}));

const LogWorkout = () => {
  const classes = useStyles();
  const { dispatch, history } = useUtils();

  // User Auth
  let userId = useSelector((state) => state.user.curUserId);
  if (userId === null) {
    userId = localStorage.getItem('userId');
    if (!userId) {
      history.push('/');
    } else {
      dispatch(setUserId(userId));
    }
  }

  const [workoutObj, setWorkoutObj] = useState([]); // -> Array of Workout Names
  const [workoutNames, setWorkoutNames] = useState([]); // -> Array of Workout Names
  const [workoutIds, setWorkoutIds] = useState([]); // -> Array of Workout Ids
  const [exerciseList, setExerciseList] = useState([]); // ->
  const [reRender, setReRender] = useState(true); // Boolean For useEffect -> To Prevent Re Renders
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [inputError, setInputError] = useState(false);

  const filterExerciseList = () => {
    let tempArr;

    workoutObj.forEach((workout) => {
      if (workout.workoutName === selectedWorkout) {
        console.log(`pass`);

        tempArr = workout.exercises;
      }
    });

    // Set Exercise List
    setExerciseList(JSON.parse(tempArr));
  };

  const getToday = () => {
    var today = new Date();
    var DD = String(today.getDate()).padStart(2, '0');
    var MM = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var YYYY = today.getFullYear();

    return `${YYYY}-${MM}-${DD}`;
  };

  // ID Structure
  // 'sets'+ exerciseName+index.toString()
  // 'reps'+ exerciseName+index.toString()
  // 'weight'+ exerciseName+index.toString()
  // 'date'+ exerciseName+index.toString()

  let counter = 0;

  const handleSubmit = () => {
    // Loop through exercise inputs and get data

    for (let i = 0; i <= counter; i++) {
      let exerciseName = document.getElementById(`exerciseName${i}`).innerText;
      let setTotal = document.getElementById(`sets${i}`).value;
      let repetitionsCompletedPerSet = document.getElementById(`reps${i}`)
        .value;
      let weightUsedPerSet = document.getElementById(`weight${i}`).value;
      let exerciseDate = document.getElementById('workoutDate').value;

      if (
        exerciseName === '' ||
        setTotal === '' ||
        repetitionsCompletedPerSet === '' ||
        weightUsedPerSet === '' ||
        exerciseDate === ''
      ) {
        setInputError(true);
        setTimeout(() => {
          setInputError(false);
        }, 3000);
      } else {
        console.log(`No empty huh?`);
        axios.post(`/api/exercise/add/${userId}`, {
          exerciseName,
          setTotal,
          repetitionsCompletedPerSet,
          weightUsedPerSet,
          exerciseDate,
        });
      }
    }
  };

  // Get workoutNames from DB
  useEffect(() => {
    if (reRender) {
      // Get Workout List from Backend
      axios.get(`/api/workout/user/${userId}`).then(({ data }) => {
        // Save Full Object to state
        setWorkoutObj(data);

        // Get Names and IDs from workouts
        const resWorkoutNames = data.map((workout) => workout.workoutName);
        const resWorkoutIds = data.map((workout) => workout.id);

        setWorkoutNames(resWorkoutNames);
        setWorkoutIds(resWorkoutIds);

        setReRender(false);

        console.log(`Log Component Rendered`);
      }); // Axios Get
    }

    if (selectedWorkout !== null && selectedWorkout !== '') {
      filterExerciseList();
    }
    console.log('Selected workout -> ' + selectedWorkout);
  }, [reRender, selectedWorkout]);

  return (
    <Container maxWidth='xl' className={classes.container}>
      {inputError ? (
        <Alert severity='error' className={classes.alert}>
          All Inputs are required.
        </Alert>
      ) : null}
      <Paper className={classes.paper}>
        {/* drop down list showing all the workout has been created */}
        <FormControl className={classes.centerInput}>
          <Autocomplete
            id='workoutIds'
            options={workoutNames}
            getOptionLabel={(option) => option}
            onChange={(event, newValue) => setSelectedWorkout(newValue)}
            style={{ width: 400 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Choose your Workout'
                variant='outlined'
              />
            )}
          />
        </FormControl>

        {/* List exercises with inputs */}

        <Grid>
          <Grid item xs={12} className={classes.marginOne}>
            {exerciseList.length === 0
              ? null
              : exerciseList.map((exerciseName, index) => {
                  counter = index;
                  return (
                    <Fragment key={uniqid()}>
                      <h2
                        id={'exerciseName' + index}
                        className={classes.fontWeight}
                      >
                        {exerciseName}
                      </h2>
                      <TextField
                        className={classes.marginLR}
                        id={`sets${index}`}
                        label='Sets*'
                        type='number'
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant='outlined'
                      />
                      <TextField
                        className={classes.marginLR}
                        id={`reps${index}`}
                        label='Reps*'
                        type='number'
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant='outlined'
                      />
                      <OutlinedInput
                        className={classes.marginLR}
                        id={`weight${index}`}
                        placeholder='Weight'
                        endAdornment={
                          <InputAdornment position='end'>Lb</InputAdornment>
                        }
                        aria-describedby='outlined-weight-helper-text'
                        inputProps={{
                          'aria-label': 'weight',
                        }}
                        labelWidth={0}
                      />
                    </Fragment>
                  );
                })}
          </Grid>
          {exerciseList.length !== 0 ? (
            <Box display='flex' justifyContent='center' p={2}>
              <TextField
                id='workoutDate'
                label='Workout Date'
                format='MM/DD/YYYY'
                type='date'
                defaultValue={getToday()}
                className={(classes.textField, classes.marginLeftAuto)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button
                onClick={handleSubmit}
                id='workoutDate'
                className={(classes.button, classes.marginRightAuto)}
                color='primary'
                variant='contained'
                style={{ width: '120px' }}
              >
                Save
              </Button>
            </Box>
          ) : null}
        </Grid>
      </Paper>
    </Container>
  );
};

// Sets Reps and Weight -> Completed

export default LogWorkout;
