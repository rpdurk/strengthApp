import React from "react";
import clsx from "clsx";
import { Container, Box, Grid, Paper, makeStyles } from "@material-ui/core";
import BodyWeightChart from "../common/components/Charts/BodyWeightChart";
import BMIChart from "../common/components/Charts/BMIChart";
import ProgressChart from "../common/components/Charts/ProgressChart";

const useStyles = makeStyles(theme => ({
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
  header: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(7),
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerPadding: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  fixedHeight: {
    height: 350,
  },
  largeChart: {
    height: 500,
  },
}));

const Progress = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const largeChartPaper = clsx(classes.paper, classes.largeChart);
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Container className={classes.header}>
        <Box border={1} borderRadius={16} className={classes.headerPadding}>
          <h1>Progress</h1>
        </Box>
      </Container>
      <Grid container spacing={3}>
        {/* Progress Chart */}
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Paper className={largeChartPaper}>
            <ProgressChart />
          </Paper>
        </Grid>
        {/* Body Weight Chart */}
        <Grid item xs={12} md={8} lg={6} xl={6}>
          <Paper className={fixedHeightPaper}>
            <h1>Body Weight</h1>
            <BodyWeightChart />
          </Paper>
        </Grid>
        {/* BMI Chart */}
        <Grid item xs={12} md={4} lg={6} xl={6}>
          <Paper className={fixedHeightPaper}>
            <h1>BMI</h1>
            <BMIChart />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Progress;
