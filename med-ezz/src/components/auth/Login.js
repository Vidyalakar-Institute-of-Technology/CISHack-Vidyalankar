import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexDirection: "column",
      background: "linear-gradient(0deg, #1DA1F2,#FFFFFF,#406BBF)",
      height: "100vh",
    },
  })
);

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div></div>
    </div>
  );
}
export default Login;
