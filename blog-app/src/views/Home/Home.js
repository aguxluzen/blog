import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core"
import Carousel from "./components/Carousel";
import Posts from "./components/Posts";

const useStyles = makeStyles((theme) => ({
  cont: {
    marginTop:"5vh",
    marginBottom:"5vh",
  }
  
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Carousel/>
      <Box className={classes.cont}>
        <Posts />
      </Box>
    </>
  );
};

export default Home;
