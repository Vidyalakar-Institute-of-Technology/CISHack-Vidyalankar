import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

export default function PatientAppointment() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}
