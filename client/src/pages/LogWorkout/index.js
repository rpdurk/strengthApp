import React, { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { useUtils } from '../common';
import { setUserId } from '../User/UserReducer';
import uniqid from 'uniqid';

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

  table: {
    minWidth: 750,
    margin: '0 auto',
    alignItems: 'center',
    border: 0,
  },
}));

const LogWorkout = () => {
  const classes = useStyles();
  const { dispatch, history } = useUtils();
  const [age, setAge] = React.useState('');
  const [benchPressSet, setBenchPressSet] = React.useState('');
  const [pushUpsSet, setPushUpsSet] = React.useState('');
  const [sitUpsSet, setSitUpsSet] = React.useState('');
  const [benchPressRep, setBenchPressRep] = React.useState('');
  const [pushUpsRep, setPushUpsRep] = React.useState('');
  const [sitUpsRep, setSitUpsRep] = React.useState('');
  const [benchPressWeight, setBenchPressWeight] = React.useState('');
  const [pushUpsWeight, setPushUpsWeight] = React.useState('');
  const [sitUpsWeight, setSitUpsWeight] = React.useState('');

  const [benchPressCompleted, setBenchPressCompleted] = React.useState([]);

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
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   // Loop through exercises to pull out sets, reps, weight
  //   // for (let i = 0; i <= counter; i++) {
  //   //   tempSetsArr.push(document.getElementById(`sets${i}`).value);
  //   //   document.getElementById(`sets${i}`).value = "";
  //   // }
  // };

  const handleBenchPressSubmit = async (e) => {
    e.preventDefault();
    const exerciseData = {
      exerciseName: 'Bench Press',
      setTotal: benchPressSet,
      repetitionsCompletedPerSet: benchPressRep,
      weightUsedPerSet: benchPressWeight,
    };
    try {
      const res = await axios.post('/api/exercise/add', exerciseData, {
        headers: { authorization: localStorage.getItem('token') },
      });
      console.log(res);
      const newState = [...benchPressCompleted, res.data];
      setBenchPressSet('');
      setBenchPressRep('');
      setBenchPressWeight('');
      setBenchPressCompleted(newState);
    } catch (e) {
      console.log(e);
    }
  };

  // exerciseObj = {
  //   exerciseName,
  //   musclesUsed,
  //   userId,
  //   workoutId,
  //   exerciseDate,
  //   setTotal,
  //   repetitionGoalPerSet,
  //   repetitionsCompletedPerSet,
  //   weightUsedPerSet,
  //   timeUsedPerSet,
  //   restUsedPerSet,
  // };

  // Schema
  // exerciseName VARCHAR(255) NOT NULL,
  // musclesUsed VARCHAR(255),
  // userId INT references users(id),
  // workoutId INT references workouts(id),
  // exerciseDate DATE NOT NULL,
  // setTotal INT NOT NULL,
  // repetitionGoalPerSet VARCHAR(255) NOT NULL,
  // repetitionsCompletedPerSet VARCHAR(255) NOT NULL,
  // weightUsedPerSet VARCHAR(255) ,
  // timeUsedPerSet VARCHAR(255) ,
  // restUsedPerSet VARCHAR(255) ,

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
        <FormControl className={classes.select}>
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
        {/* here are the inputs all the workout sets */}
        <form className={classes.root} noValidate autoComplete='off'>
          <Table className={classes.table}>
            <TableBody>
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
            </TableBody>
          </Table>
          <TextField
            id='date'
            label='Workout Date'
            type='date'
            defaultValue='2017-05-24'
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <Box display='flex' justifyContent='center' p={2}>
          <Button
            // onClick={handleSubmit}
            id='workoutDate'
            className={classes.button}
            color='primary'
            variant='contained'
          >
            Finish
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
