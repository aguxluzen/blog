import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core"
import Carousel from "./components/Carousel";
import Posts from "./components/Posts";

const useStyles = makeStyles((theme) => ({
  
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Carousel/>
      <Box style={{marginTop:"5vh"}}>
        <Posts />
      </Box>
    </>
  );
};

export default Home;
