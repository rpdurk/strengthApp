import React from "react";
import barbell from "./barbell.png";
import iron from "./iron.png";
import dojo from "./dojo.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  banner: {
    height: 50,
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  ironSpacing: {
    height: 50,
    marginTop: theme.spacing(1),
  },
}));
const Banner = () => {
  const { banner, ironSpacing } = useStyles();
  return (
    <>
      <div>
        <img src={iron} className={ironSpacing} />
        <img src={barbell} className={banner} />
        <img src={dojo} className={banner} />
      </div>
    </>
  );
};

export default Banner;
