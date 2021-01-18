import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Post from "./Post";
import { Grid, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },/* 
  item: {
    marginRight: '5vw',
    marginLeft: '5vw',
  } */
});

const misDatos = [
  {
    title: "lkajhsdlkasjd",
    body:"alskdjaslkd",
    background: "https://ñlaksjdñlasjdlasd.com/lkajsd.jpg"
  },
  {
    title: "lkajhsdlkasjd",
    body:"alskdjaslkd",
    background: "https://ñlaksjdñlasjdlasd.com/lkajsd.jpg"
  },
  {
    title: "lkajhsdlkasjd",
    body:"alskdjaslkd",
    background: "https://ñlaksjdñlasjdlasd.com/lkajsd.jpg"
  },
]

function Posts() {
  const classes = useStyles();
  
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} className={classes.item}>
          <Box
            display="flex"
            justifyContent="left"
            alignItems="left"
            flexDirection="row"
          >
            <Post />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
          >
            <Post />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* <Box 
            marginLeft="5vw"
            display="flex"  
            flexDirection="row-reverse">
            <Post />
          </Box> */}
        </Grid>
      </Grid>
    </>
  );
}

export default Posts;