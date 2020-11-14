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
  button: {
    width: '15%',
    height: '10%',
    margin: '0 auto',
  },
}));

export default function BasicTable() {
  const classes = useStyles();

  return (
    <Container maxWidth='xl' className={classes.container}>

      <Box display='flex' justifyContent='center' p={2}>
        <TextField
          className={classes.bottom}
          id='workoutName'
          label='Workout Name'
          variant='outlined'
          justifyContent='center'
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
                  <Button className={classes.iconButton}>
                    <Icon
                      className='fa fa-plus-circle'
                      style={{ fontSize: 36 }}
                    />
                  </Button>
                </TableCell>
              </TableRow>
            </Box>
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Box display='flex' justifyContent='center' p={2}> */}
      <Button className={classes.button} color='primary' variant='contained'>
        Create
      </Button>
      {/* </Box> */}
      
    </Container>
  );
}
