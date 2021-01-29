import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import Carousel from "./components/Carousel";
import Posts from "./components/Posts";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  cont: {
    marginTop: "5vh",
    marginBottom: "5vh",
  },
}));
/*
const props = {
  posts: []
}

const numeros = ['1','2']
numeros.map(numero => parseInt(numero))

*/
const Home = () => {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);

  const handleOnClick = () => {
    
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("TODO ESTA MAL");
      });
  }, []);

  return (
    <>
      <Carousel />
      {/* {posts.length > 0 ? ( */}
        <Box className={classes.cont}>
          <Posts posts={posts}/>
        </Box>
      {/* ) : null} */}
    </>
  );
};

export default Home;

