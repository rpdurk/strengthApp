import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useSelector } from 'react-redux';
import { useUtils } from '../common';
import { setUserId } from '../User/UserReducer';
import uniqid from 'uniqid';
import { Grid } from '@material-ui/core';

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
}));

const LogWorkout = () => {
  const classes = useStyles();
  const { dispatch, history } = useUtils();
  const [age, setAge] = React.useState('');
  // Sets State for Sets of Specific Exercises
  const [exerciseOneSet, setExerciseOneSet] = React.useState('');
  const [exerciseTwoSet, setExerciseTwoSet] = React.useState('');
  const [exerciseThreeSet, setExerciseThreeSet] = React.useState('');
  const [exerciseFourSet, setExerciseFourSet] = React.useState('');
  const [exerciseFiveSet, setExerciseFiveSet] = React.useState('');
  const [exerciseSixSet, setExerciseSixSet] = React.useState('');
  const [exerciseSevenSet, setExerciseSevenSet] = React.useState('');
  const [exerciseEightSet, setExerciseEightSet] = React.useState('');
  // Repetitions State for Sets of Specific Exercises
  const [exerciseOneRep, setExerciseOneRep] = React.useState('');
  const [exerciseTwoRep, setExerciseTwoRep] = React.useState('');
  const [exerciseThreeRep, setExerciseThreeRep] = React.useState('');
  const [exerciseFourRep, setExerciseFourRep] = React.useState('');
  const [exerciseFiveRep, setExerciseFiveRep] = React.useState('');
  const [exerciseSixRep, setExerciseSixRep] = React.useState('');
  const [exerciseSevenRep, setExerciseSevenRep] = React.useState('');
  const [exerciseEightRep, setExerciseEightRep] = React.useState('');
  // Weight State for Sets of Specific Exercises
  const [exerciseOneWeight, setExerciseOneWeight] = React.useState('');
  const [exerciseTwoWeight, setExerciseTwoWeight] = React.useState('');
  const [exerciseThreeWeight, setExerciseThreeWeight] = React.useState('');
  const [exerciseFourWeight, setExerciseFourWeight] = React.useState('');
  const [exerciseFiveWeight, setExerciseFiveWeight] = React.useState('');
  const [exerciseSixWeight, setExerciseSixWeight] = React.useState('');
  const [exerciseSevenWeight, setExerciseSevenWeight] = React.useState('');
  const [exerciseEightWeight, setExerciseEightWeight] = React.useState('');

  const [exerciseOneCompleted, setExerciseOneCompleted] = React.useState([]);

  const [numSets, setNumSets] = useState([
    {
      set: '',
      repetitions: '',
      weight: '',
    },
  ]);

  let userId = useSelector((state) => state.user.curUserId);
  if (userId === null) {
    userId = localStorage.getItem('userId');
    dispatch(setUserId(userId));
    // if (!userId) {
    //   // history.push("/");
    // } else {
    //   dispatch(setUserId(userId));
    // }
  }

  let exerciseObj = {};

  let counter = 0;

  const handleBenchPressSubmit = async (e) => {
    e.preventDefault();
    const exerciseData = {
      exerciseName: 'Exercise One',
      setTotal: exerciseOneSet,
      repetitionsCompletedPerSet: exerciseOneRep,
      weightUsedPerSet: exerciseOneWeight,
    };
    try {
      const res = await axios.post('/api/exercise/add', exerciseData, {
        headers: { authorization: localStorage.getItem('token') },
      });
      console.log(res);
      const newState = [...exerciseOneCompleted, res.data];
      setExerciseOneSet('');
      setExerciseOneRep('');
      setExerciseOneWeight('');
      setExerciseOneCompleted(newState);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // const [workoutList, setWorkoutList] = useState([]); // -> Array of Objects

  const [workoutObj, setWorkoutObj] = useState([]); // -> Array of Workout Names
  const [workoutNames, setWorkoutNames] = useState([]); // -> Array of Workout Names
  const [workoutIds, setWorkoutIds] = useState([]); // -> Array of Workout Ids
  const [exerciseList, setExerciseList] = useState([]); // ->
  const [reRender, setReRender] = useState(true); // Boolean For useEffect -> To Prevent Re Renders
  const [selectedWorkout, setSelectedWorkout] = useState('');

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
      <Paper className={classes.paper}>
        {/* drop down list showing all the workout has been created */}
        <FormControl className={classes.centerInput}>
          <Autocomplete
            id={'workoutIds'}
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
        <Grid className={classes.table}>
          <div>
            {exerciseList.map((name, index) => {
              counter = index;
              return (
                <div>
                  <h2 className={classes.titleFont}>{name}</h2>
                  <TableRow>
                    {/* No Longer Need Table Button to add sets */}
                    {/* <TableCell>
                      <Button
                        className={classes.iconButton}
                        onClick={(e) => console.log(e)}
                      >
                        <Icon
                          className='fa fa-plus-circle'
                          style={{ fontSize: 36 }}
                        />
                      </Button>
                    </TableCell> */}

                    {numSets.map((_element, index) => {
                      return (
                        <TableRow id={uniqid()}>
                          <TableCell>
                            <TextField
                              id={`set${name}${index}`}
                              name={name}
                              onChange={(e) =>
                                name === 'Exercise One'
                                  ? setExerciseOneSet(e.target.value)
                                  : name === 'Exercise Two'
                                  ? setExerciseTwoSet(e.target.value)
                                  : name === 'Exercise Three'
                                  ? setExerciseThreeSet(e.target.value)
                                  : name === 'Exercise Four'
                                  ? setExerciseFourSet(e.target.value)
                                  : name === 'Exercise Five'
                                  ? setExerciseFiveSet(e.target.value)
                                  : name === 'Exercise Six'
                                  ? setExerciseSixSet(e.target.value)
                                  : name === 'Exercise Seven'
                                  ? setExerciseSevenSet(e.target.value)
                                  : name === 'Exercise Eight'
                                  ? setExerciseEightSet(e.target.value)
                                  : undefined
                              }
                              value={
                                name === 'Exercise One'
                                  ? exerciseOneSet
                                  : name === 'Exercise Two'
                                  ? exerciseTwoSet
                                  : name === 'Exercise Three'
                                  ? exerciseThreeSet
                                  : name === 'Exercise Four'
                                  ? exerciseFourSet
                                  : name === 'Exercise Five'
                                  ? exerciseFiveSet
                                  : name === 'Exercise Six'
                                  ? exerciseSixSet
                                  : name === 'Exercise Seven'
                                  ? exerciseSevenSet
                                  : name === 'Exercise Eight'
                                  ? exerciseEightSet
                                  : undefined
                              }
                              label='Sets'
                              type='number'
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant='outlined'
                            />
                          </TableCell>

                          <TableCell>
                            <TextField
                              id={`rep${name}${index}`}
                              onChange={(e) =>
                                name === 'Exercise One'
                                  ? setExerciseOneRep(e.target.value)
                                  : name === 'Exercise Two'
                                  ? setExerciseTwoRep(e.target.value)
                                  : name === 'Exercise Three'
                                  ? setExerciseThreeRep(e.target.value)
                                  : name === 'Exercise Four'
                                  ? setExerciseFourRep(e.target.value)
                                  : name === 'Exercise Five'
                                  ? setExerciseFiveRep(e.target.value)
                                  : name === 'Exercise Six'
                                  ? setExerciseSixRep(e.target.value)
                                  : name === 'Exercise Seven'
                                  ? setExerciseSevenRep(e.target.value)
                                  : name === 'Exercise Eight'
                                  ? setExerciseEightRep(e.target.value)
                                  : undefined
                              }
                              value={
                                name === 'Exercise One'
                                  ? exerciseOneRep
                                  : name === 'Exercise Two'
                                  ? exerciseTwoRep
                                  : name === 'Exercise Three'
                                  ? exerciseThreeRep
                                  : name === 'Exercise Four'
                                  ? exerciseFourRep
                                  : name === 'Exercise Five'
                                  ? exerciseFiveRep
                                  : name === 'Exercise Six'
                                  ? exerciseSixRep
                                  : name === 'Exercise Seven'
                                  ? exerciseSevenRep
                                  : name === 'Exercise Eight'
                                  ? exerciseEightRep
                                  : undefined
                              }
                              label='Repetitions'
                              variant='outlined'
                            />
                          </TableCell>

                          <TableCell>
                            <TextField
                              id={`weight${name}${index}`}
                              onChange={(e) =>
                                name === 'Exercise One'
                                  ? setExerciseOneWeight(e.target.value)
                                  : name === 'Exercise Two'
                                  ? setExerciseTwoWeight(e.target.value)
                                  : name === 'Exercise Three'
                                  ? setExerciseThreeWeight(e.target.value)
                                  : name === 'Exercise Four'
                                  ? setExerciseFourWeight(e.target.value)
                                  : name === 'Exercise Five'
                                  ? setExerciseFiveWeight(e.target.value)
                                  : name === 'Exercise Six'
                                  ? setExerciseSixWeight(e.target.value)
                                  : name === 'Exercise Seven'
                                  ? setExerciseSevenWeight(e.target.value)
                                  : name === 'Exercise Eight'
                                  ? setExerciseEightWeight(e.target.value)
                                  : undefined
                              }
                              value={
                                name === 'Exercise One'
                                  ? exerciseOneWeight
                                  : name === 'Exercise Two'
                                  ? exerciseTwoWeight
                                  : name === 'Exercise Three'
                                  ? exerciseThreeWeight
                                  : name === 'Exercise Four'
                                  ? exerciseFourWeight
                                  : name === 'Exercise Five'
                                  ? exerciseFiveWeight
                                  : name === 'Exercise Six'
                                  ? exerciseSixWeight
                                  : name === 'Exercise Seven'
                                  ? exerciseSevenWeight
                                  : name === 'Exercise Eight'
                                  ? exerciseEightWeight
                                  : undefined
                              }
                              label='Weight'
                              variant='outlined'
                            />
                          </TableCell>

                          <TableCell>
                            <FormControlLabel
                              id={`check${name}${index}`}
                              control={<Checkbox name='checked' />}
                              label='completed'
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableRow>
                </div>
              );
            })}
          </div>
        </Grid>

        <Box display='flex' justifyContent='center' p={2}>
          <TextField
            id='date'
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
            // onClick={handleSubmit}
            id='workoutDate'
            className={(classes.button, classes.marginRightAuto)}
            color='primary'
            variant='contained'
          >
            Save
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LogWorkout;

/* 

{exerciseList.map((name, index) => {
                counter = index;
                return (
                  <div>
                    <Typography
                      gutterBottom
                      align='center'
                      variant='h5'
                      component='h2'
                    >
                      {name}
                    </Typography>
                    <TableRow>
                      <TableCell>
                        <Button
                          id={`btn${name}${index}`}
                          className={classes.iconButton}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(`exercise${name}${index}`);
                            // console.log(e.target.id);

                            const newSet = {
                              set: '',
                              repetitions: '',
                              weight: '',
                            };
                            setNumSets([...numSets, newSet]);
                          }}
                        >
                          <Icon
                            className='fa fa-plus-circle'
                            style={{ fontSize: 36 }}
                          />
                        </Button>
                      </TableCell>
                      {numSets.map((_element, index) => {
                        return (
                          <TableRow id={`exercise${name}${index}`}>
                            <TableCell>
                              <TextField
                                id={`set${name}${index}`}
                                name={name}
                                onChange={(e) =>
                                  name === 'Bench Press'
                                    ? setBenchPressSet(e.target.value)
                                    : name === 'Push Ups'
                                    ? setPushUpsSet(e.target.value)
                                    : name === 'Sit Ups'
                                    ? setSitUpsSet(e.target.value)
                                    : undefined
                                }
                                value={
                                  name === 'Bench Press'
                                    ? benchPressSet
                                    : name === 'Push Ups'
                                    ? pushUpsSet
                                    : name === 'Sit Ups'
                                    ? sitUpsSet
                                    : undefined
                                }
                                label='Sets'
                                type='number'
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                variant='outlined'
                              />
                            </TableCell>

                            <TableCell>
                              <TextField
                                id={`rep${name}${index}`}
                                onChange={(e) =>
                                  name === 'Bench Press'
                                    ? setBenchPressRep(e.target.value)
                                    : name === 'Push Ups'
                                    ? setPushUpsRep(e.target.value)
                                    : name === 'Sit Ups'
                                    ? setSitUpsRep(e.target.value)
                                    : undefined
                                }
                                value={
                                  name === 'Bench Press'
                                    ? benchPressRep
                                    : name === 'Push Ups'
                                    ? pushUpsRep
                                    : name === 'Sit Ups'
                                    ? sitUpsRep
                                    : undefined
                                }
                                label='Repetitions'
                                variant='outlined'
                              />
                            </TableCell>

                            <TableCell>
                              <TextField
                                id={`weight${name}${index}`}
                                onChange={(e) =>
                                  name === 'Bench Press'
                                    ? setBenchPressWeight(e.target.value)
                                    : name === 'Push Ups'
                                    ? setPushUpsWeight(e.target.value)
                                    : name === 'Sit Ups'
                                    ? setSitUpsWeight(e.target.value)
                                    : undefined
                                }
                                value={
                                  name === 'Bench Press'
                                    ? benchPressWeight
                                    : name === 'Push Ups'
                                    ? pushUpsWeight
                                    : name === 'Sit Ups'
                                    ? sitUpsWeight
                                    : undefined
                                }
                                label='Weight'
                                variant='outlined'
                              />
                            </TableCell>

                            <TableCell>
                              <FormControlLabel
                                id={`check${name}${index}`}
                                control={<Checkbox name="checked" />}
                                label="completed"
                              />
                              <Button
                                onClick={handleBenchPressSubmit}
                                id='workoutDate'
                                className={classes.button}
                                color='primary'
                                variant='contained'
                              >
                                Completed
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableRow>
                  </div>
                );
              })}
*/
