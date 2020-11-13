import React, { useState } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";
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
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

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
    display: "flex",
    margin: "0 auto",
    overflow: "auto",
    flexDirection: "column",
    textAlign: "center",
  },
  fixedHeight: {
    height: 350,
  },
  doneButton: {
    marginTop: theme.spacing(2),
    width: '13ch'
  },
  select: {
    width: '70ch',
    display: "flex",
    margin: "0 auto",
    overflow: "auto",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: theme.spacing(6)
  },
  iconButton: {
    width: '6ch'
  },

  table: {
    minWidth: 750,
    margin: "0 auto",
    alignItems: 'center',
    border: 0,
  },

}));



const LogWorkout = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [numSets, setNumSets] = useState([
    {
      set: "",
      reptions: "",
      weight: "",
    }
  ]);
  // console.log(numSets);
  // setNumSets(3);

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Paper className={classes.paper}>
        {/* drop down list showing all the workout has been created */}
        <FormControl className={classes.select} >
          <InputLabel>Choose a workout</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Bench Press</MenuItem>
            <MenuItem value={20}>Squat</MenuItem>
            <MenuItem value={30}>Deadlift</MenuItem>
          </Select>
        </FormControl>

        {/* this should be connect with dropdown list, and showing which is selected */}
        <Typography gutterBottom variant="h5" component="h2">
          Bench Press
          </Typography>


        {/* here are the inputs all the workout sets */}
        <form className={classes.root} noValidate autoComplete="off">
          <Table className={classes.table}>
            <TableBody >
              <TableRow >
              <TableCell >
                <Button
                  className={classes.iconButton}
                  onClick={(e) => {
                    e.preventDefault();
                    const newSet = {
                      set: "",
                      reptitions: "",
                      weight: "",
                    };
                    setNumSets([...numSets, newSet]);

                  }}
                >
                  
                  <Icon className="fa fa-plus-circle" style={{ fontSize: 36 }} />
                </Button>
                </TableCell>
                {
                  numSets.map((_element, index) => {
                    return (

                      <TableRow>
         
                        <TableCell>
                          <TextField
                            id="outlined-number"
                            label="Sets"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            variant="outlined"
                          />
                        </TableCell>

                        <TableCell>
                          <TextField id="outlined-basic" label="Reptitions" variant="outlined" />
                        </TableCell>

                        <TableCell>
                          <TextField id="outlined-basic" label="Weight" variant="outlined" />
                        </TableCell>

                        <TableCell>
                          <Button className={classes.doneButton} color="primary" size="large" variant="contained" >
                            Done
                    </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableRow>
            </TableBody>
          </Table>

        </form>

      </Paper>
    </Container>
  );
};

export default LogWorkout;
