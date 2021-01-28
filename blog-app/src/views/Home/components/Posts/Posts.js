import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Post from "./Post";
import { Grid, Box } from "@material-ui/core";
import chunk from "lodash/chunk";

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

const misDatos = [
  {
    title: "lkajhsdlkasjd",
    body: "alskdjaslkd",
    background: "https://ñlaksjdñlasjdlasd.com/lkajsd.jpg",
  },
  {
    title: "lkajhsdlkasjd",
    body: "alskdjaslkd",
    background: "https://ñlaksjdñlasjdlasd.com/lkajsd.jpg",
  },
  {
    title: "lkajhsdlkasjd",
    body: "alskdjaslkd",
    background: "https://ñlaksjdñlasjdlasd.com/lkajsd.jpg",
  },
];

function Posts({ posts }) {
  const classes = useStyles();

  return (
    <>
      {
        //[{},{},{},{}]
        chunk(posts, 3)
          //[[{},{},{}],[{},{},{}]]
          .map((postGroupOfThree) => (
            <Grid container>
              {/* resolver problema con el remanente */}
              <Grid item xs={12} sm={4}>
                <Box className={classes.leftBox}>
                  <Post post={postGroupOfThree[0]} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box className={classes.centerBox}>
                  <Post post={postGroupOfThree[1]} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box className={classes.rightBox}>
                  <Post post={postGroupOfThree[2]} />
                </Box>
              </Grid>
            </Grid>
          ))
      }
    </>
  );
}

export default Posts;
