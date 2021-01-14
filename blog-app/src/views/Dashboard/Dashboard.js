import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Box, TextField } from "@material-ui/core";
import images from "../../assets/images";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  img: {
    display:"flex",
    width:"100%",
    height:"40vh",
    background: "#000",
  },
  text: {
    position: "absolute",
    alignMargin:  "center",
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item style={{ width: "100%" }}>
          <div>
            <Box className={classes.img}>
              <img style={{ width: "100%" }} src={images.img1}/>
              <h1 className={classes.text} style={{ width: "100%"}}>hola</h1>
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
