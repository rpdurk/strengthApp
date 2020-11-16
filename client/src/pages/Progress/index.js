import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import BodyWeightChart from "../common/components/Charts/BodyWeightChart";
import BMIChart from "../common/components/Charts/BMIChart";
import ProgressChart from "../common/components/Charts/ProgressChart";
import ProgressMenu from "../common/components/Charts/ProgressMenu";

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
      <Grid container spacing={3}>
        {/* Progress Chart */}
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Paper className={largeChartPaper}>
            <ProgressMenu />
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
