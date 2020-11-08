import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  OutlinedInput,
  InputAdornment,
  MenuItem,
} from "@material-ui/core";

const ProfileDetails = ({ className, ...rest }) => {
  const [values, setValues] = useState({
    firstName: "Ryan",
    lastName: "Durk",
    email: "demo@sfsu.edu",
    city: "San Francisco",
    state: "CA",
    feet: 6,
    inches: 1,
    weight: 175,
  });
  const feet = [
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
    {
      value: 5,
      label: 5,
    },
    {
      value: 6,
      label: 6,
    },
    {
      value: 7,
      label: 7,
    },
  ];
  const inches = [
    {
      value: 0,
      label: 0,
    },
    {
      value: 1,
      label: 1,
    },
    {
      value: 2,
      label: 2,
    },
    {
      value: 3,
      label: 3,
    },
    {
      value: 4,
      label: 4,
    },
    {
      value: 5,
      label: 5,
    },
    {
      value: 6,
      label: 6,
    },
    {
      value: 7,
      label: 7,
    },
    {
      value: 8,
      label: 8,
    },
    {
      value: 9,
      label: 9,
    },
    {
      value: 10,
      label: 10,
    },
    {
      value: 11,
      label: 11,
    },
    {
      value: 12,
      label: 12,
    },
  ];

  const useStyles = makeStyles(() => ({
    title: { textAlign: "center" },
  }));
  const classes = useStyles();

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    // Profile form
    <form
      autoComplete="on"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader title="Profile" className={classes.title} />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            {/* First Name */}
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="First name"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            {/* Last Name */}
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            {/* Email */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                id="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                variant="outlined"
              />
            </Grid>
            {/* City */}
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="City"
                id="city"
                name="city"
                onChange={handleChange}
                value={values.city}
                variant="outlined"
              />
            </Grid>
            {/* State */}
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="State"
                id="state"
                name="state"
                onChange={handleChange}
                value={values.state}
                variant="outlined"
              />
            </Grid>
            {/* Height */}
            <Grid item md={3} xs={6}>
              <TextField
                id="feet"
                select
                fullWidth
                type="number"
                label="Height (ft)"
                value={values.feet}
                onChange={handleChange}
                variant="outlined"
                endAdornment={
                  <InputAdornment position="end">Lbs</InputAdornment>
                }
              >
                {feet.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item md={3} xs={6}>
              <TextField
                id="inches"
                select
                fullWidth
                type="number"
                label="Height (in)"
                value={values.inches}
                onChange={handleChange}
                variant="outlined"
                endAdornment={
                  <InputAdornment position="end">Lbs</InputAdornment>
                }
              >
                {inches.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            {/* Weight */}
            <Grid item md={6} xs={12}>
              <TextField
                id="weight"
                label="Weight (lbs)"
                onChange={handleChange}
                type="number"
                value={values.weight}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        {/* Submit */}
        <Box display="flex" justifyContent="center" p={2}>
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string,
};

export default ProfileDetails;
