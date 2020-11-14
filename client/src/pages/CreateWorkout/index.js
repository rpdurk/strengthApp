import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import clsx from "clsx";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { searchExercises } from "../../utils/API";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 750,
    margin: "0 auto",
    alignItems: "center",
    border: 0,
  },
  container: {
    paddingTop: theme.spacing(6),
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
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [exercise, setExercise] = useState([
    {
      value: "",
    },
  ]);

  const classes = useStyles();

  useEffect(async () => {
    // Runs after the first render() lifecycle
    axios
      .get("https://wger.de/api/v2/exercise/?language=2&limit=999&ordering=id")
      .then(res => {
        const exerciseResultsList = res.data.results.filter(
          exercise => exercise.muscles.length !== 0
        );
        const exerciseList = exerciseResultsList.map(singleExercise => {
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
    <Container maxWidth="xl" className={classes.container}>
      <Box display="flex" justifyContent="center" p={2}>
        <TextField
          className={classes.bottom}
          id="workoutName"
          label="Workout Name"
          variant="outlined"
          justifyContent="center"
        />
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>{/* <TableCell>Exercises</TableCell> */}</TableRow>
          </TableHead>
          <TableBody>
            <Box display="flex" justifyContent="center" p={2}>
              <TableRow>
                <TableCell>
                  <Button
                    className={classes.iconButton}
                    onClick={e => {
                      e.preventDefault();
                      const newExercise = {
                        value: "",
                      };
                      setExercise([...exercise, newExercise]);
                    }}
                  >
                    <Icon
                      className="fa fa-plus-circle"
                      style={{ fontSize: 36 }}
                    />
                  </Button>
                </TableCell>
                {exercise.map((_element, index) => {
                  return (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <FormControl className={classes.formControl}>
                          <Autocomplete
                            id="exercise"
                            options={exerciseList}
                            getOptionLabel={option => option}
                            style={{ width: 400 }}
                            renderInput={params => (
                              <TextField
                                {...params}
                                label="Choose your exercise"
                                variant="outlined"
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
      <Box display="flex" justifyContent="center" p={2}>
        <Button className={classes.top} color="primary" variant="contained">
          Create
        </Button>
      </Box>
    </Container>
  );
}
