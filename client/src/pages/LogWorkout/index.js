import React from 'react';
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
  button: {
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

}));

const LogWorkout = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.container}>


      <Paper className={classes.paper}>
        <FormControl className={classes.select} >
          <InputLabel>Choose a workout</InputLabel>
          <Select
            inputProps={{
              name: 'Choose a workout',
              id: 'age-native-simple',
            }}
          >
            <option value={0}>Bench press</option>
            <option value={0}>Second </option>
            <option value={0}>Third</option>
          </Select>
        </FormControl>
        <Typography gutterBottom variant="h5" component="h2">
          Bench Press
          </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-number"
            label="Sets"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Reptions" variant="outlined" />
          <TextField id="outlined-basic" label="weight" variant="outlined" />
          <Button className={classes.button} color="primary" size="large" variant="contained" >
            Create
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LogWorkout;
