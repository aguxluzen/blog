import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Post from "./Post";
import { Grid, Box } from "@material-ui/core";
import axios from "axios";
import chunk from "lodash/chunk";

const a = {
  userId: 10,
  id: 94,
  title: "qui qui voluptates illo iste minima",
  body:
    "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis",
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  leftBox: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      alignItems: "center",
      margin: "0",
    },
    marginLeft: "5vw",
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    flexDirection: "row",
  },
  centerBox: {
    [theme.breakpoints.down("md")]: {
      marginTop: "5vh",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rightBox: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: "5vh",
      margin: "0",
    },
    marginRight: "5vw",
    display: "flex",
    flexDirection: "row-reverse",
  },
}));


const getClassByIndex = (index) => {
  switch (index) {
    case 0:
      // return classes.leftBox;
      break;

    case 1:
      // return classes.centerBox;
      break;

    case 2:
      // return classes.rightBox;
      break;

    default:
      break;
  }
};

const shouldShowPost = (post, index) => {
  return post ? (
    <Grid item xs={12} sm={4}>
      <Box className={getClassByIndex(index)}>
        <Post post={post} />
      </Box>
    </Grid>
  ) : null;
};

const MyFuckingGroupOfPostShouldWorkInThisComponent = (props) => {
  const classes = useStyles();
  const { group } = props;

  const getClassByIndex = (index) => {
    switch (index) {
      case 0:
        return classes.leftBox;
        break;

      case 1:
        return classes.centerBox;
        break;

      case 2:
        return classes.rightBox;
        break;

      default:
        break;
    }
  };

  const shouldShowPost = (post, index) => {
    return post ? (
      <Grid item xs={12} sm={4}>
        <Box className={getClassByIndex(index)}>
          <Post post={post} />
        </Box>
      </Grid>
    ) : null;
  };

  return (
    <>
      <Grid container>
        {group.map((post, index) => (
          <>{shouldShowPost(post, index)}</>
        ))}
      </Grid>
    </>
  );
};

function Posts({ posts, group }) {
  return (
    <>
      {
        /*
        */
        //[{},{},{},{}]
        chunk(posts, 3)
          //[[{},{},{}],[{},{},{}]]
            .map((postGroupOfThree) => {
            return (
              <MyFuckingGroupOfPostShouldWorkInThisComponent
                group={postGroupOfThree}
              />
            );
          })
      }
      {
        // group.map((p, index) => {
        //   return (
        //     <>
        //     {shouldShowPost(p,index)}
        //     </>
        //   )
        // })
      }
    </>
  );
}

export default Posts;
