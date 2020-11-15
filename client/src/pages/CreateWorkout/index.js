import React, { useEffect, useState, useRef } from 'react';
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
import Select from '@material-ui/core/Select';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { searchExercises } from '../../utils/API';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Icon from '@material-ui/core/Icon';
import { useSelector } from 'react-redux';
import { useUtils } from '../common';
import { setUserId } from '../User/UserReducer';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 750,
    margin: '0 auto',
    alignItems: 'center',
    border: 0,
  },
  container: {
    paddingTop: theme.spacing(6),
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
  bottom: {
    marginBottom: theme.spacing(4),
  },
  top: {
    marginTop: theme.spacing(4),
  },
}));

export default function BasicTable() {
  const [formInputs, setFormInputs] = useState({});
  const [exerciseList, setExerciseList] = useState([]);
  const [workoutName, setWorkoutName] = useState('');
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [exercise, setExercise] = useState([]);
  const { dispatch, history } = useUtils();

  let userId = useSelector((state) => state.user.curUserId);

  if (userId === null) {
    userId = localStorage.getItem('userId');
    if (!userId) {
      history.push('/');
    } else {
      dispatch(setUserId(userId));
    }
  }

  // Component Variables
  let counter = 0;
  let workoutObj = {};
  let newExercise = {
    value: '',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempArr = [];

    // Loop through and reset
    for (let i = 0; i <= counter; i++) {
      tempArr.push(document.getElementById(`exercise${i}`).value);
      document.getElementById(`exercise${i}`).value = '';
    }

    newExercise = {
      value: '',
    };

    setExercise([newExercise]);
    let exercises = JSON.stringify(tempArr);

    // workout name
    // userid
    // exercises

    workoutObj = {
      workoutName,
      userId,
      exercises,
    };

    // Axios push
    axios.post('/api/workout/addWorkout', workoutObj).then((res) => {
      console.log(res.data);
    });

    // console.log(test);
    // Get workout

    // axios.get(`/api/workout/user/${userId}`).then((res) => {
    //   console.log(res.data);
    // });

    // console.log('workouts', workouts);
  };

  const classes = useStyles();

  useEffect(() => {
    // Runs after the first render() lifecycle
    axios
      .get('https://wger.de/api/v2/exercise/?language=2&limit=999&ordering=id')
      .then((res) => {
        // Filter out exercieses with no muscle details
        const exerciseResultsList = res.data.results.filter((exercise) => {
          return exercise.muscles.length !== 0 && exercise.name;
        });
        const exerciseList = exerciseResultsList.map((singleExercise) => {
          const exerciseName = singleExercise.name;
          //   console.log(exerciseName);
          return exerciseName;
          // return exerciseName.toLowerCase();
        });
        setExerciseList(exerciseList);
      });
  }, []);

  function getStyles(name, nums, theme) {
    return {
      fontWeight:
        nums.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  return (
    <Container maxWidth='xl' className={classes.container}>
      <Box display='flex' justifyContent='center' p={2}>
        <TextField
          className={classes.bottom}
          id='workoutName'
          label='Workout Name'
          variant='outlined'
          justifyContent='center'
          onChange={(e) => setWorkoutName(e.target.value)}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>{/* <TableCell>Exercises</TableCell> */}</TableRow>
          </TableHead>
          <TableBody>
            <Box display='flex' justifyContent='center' p={2}>
              <TableRow>
                <TableCell>
                  <Button
                    className={classes.iconButton}
                    onClick={(e) => {
                      e.preventDefault();

                      setExercise([...exercise, newExercise]);
                    }}
                  >
                    <Icon
                      className='fa fa-plus-circle'
                      style={{ fontSize: 36 }}
                    />
                  </Button>
                </TableCell>
                {exercise.map((_element, index) => {
                  counter = index;

                  return (
                    <TableRow>
                      <TableCell component='th' scope='row'>
                        <FormControl className={classes.formControl}>
                          <Autocomplete
                            id={`exercise${index}`}
                            options={exerciseList}
                            getOptionLabel={(option) => option}
                            style={{ width: 400 }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label='Choose your exercise'
                                variant='outlined'
                              />
                            )}
                          />
                        </FormControl>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableRow>
            </Box>
          </TableBody>
        </Table>
      </TableContainer>
      <Box display='flex' justifyContent='center' p={2}>
        <Button
          onClick={handleSubmit}
          className={classes.top}
          color='primary'
          variant='contained'
        >
          Create
        </Button>
      </Box>
    </Container>
  );
}
