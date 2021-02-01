import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import Carousel from "./components/Carousel";
import Posts from "./components/Posts";
import axios from "axios";
import chunk from "lodash/chunk";
import ThemeContext from "../../context/theme/theme.context";
import { PostsContext } from "../../context/posts/posts.provider";
import { useQuery } from "react-query";
import usePosts from "../../hooks/posts/usePosts";

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

  const { data, isLoading } = usePosts();

  return (
    <>
      {/* <PostsContext.Consumer>
        {(context) => {
          console.log(context.posts);

          return (
            <>
              <Carousel />
              <Box className={classes.cont}>
                <Posts posts={context.posts} />
              </Box>
            </>
          );
        }}
      </PostsContext.Consumer> */}
      <Carousel />
      <Box className={classes.cont}>
        {isLoading ? null : <Posts posts={data} />}
      </Box>
    </>
  );
};

export default Home;
