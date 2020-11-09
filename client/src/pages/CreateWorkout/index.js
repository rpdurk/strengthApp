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

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,

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
  bottom:{
    marginBottom: theme.spacing(4)
  },
  top:{
    marginTop: theme.spacing(4)
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export default function BasicTable() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const theme = useTheme();

  const handleChange = (event) => {
    setAge(event.target.value);
  };


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
      <TextField 
       className={classes.bottom}
          id="createWorkout"
          label="Create your workout"
          defaultValue="Default Value"
          variant="outlined"
        />
  
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >Excercise</TableCell>
              <TableCell align="right">Set</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  <FormControl className={classes.formControl}>
                    <InputLabel id="select-label">Excercises</InputLabel>
                    <Select
                      labelId="select-label"
                      id="select"
                      value={age}
                      onChange={handleChange}
                    >
                      {/* <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                    <FormHelperText>Choose Your Excercises</FormHelperText>
                  </FormControl>
                </TableCell>
                <TableCell align="right">
                  <TextField
                    id="standard-number"
                    label="Choose your set"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button  className={classes.top} color="primary" variant="contained">
            Create
          </Button>
    </Container>
  );
}