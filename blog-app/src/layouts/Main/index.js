import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";

import { Topbar, Footer } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 56,
    height: "100%",
    marginDown: "15vh",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 64,
    },
  },
  content: {
    marginRight: "0vw",
    marginLeft: "0vw",
    marginTop: "5vh",
  },
}));
/**
 * 
const posts = (props) => {
  return (
    <p>
    post.data
    </p>
  )
}


 const alskdj = () => {
  
  const posts = axios.get('posts')

  return (
    <>
    <WithLoading dataIsOk={ () => posts && posts.length > 0}>
      <Posts posts={posts}/>
    </WithLoading>
    </> 
  )
 }

const WithLoading = ({dataIsOk}}) => {
  return (
    <>
    {
      dataIsOk ? children : <Spinner/>
    }
    </>
  ) 
}

 */

const Main = (props) => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      <Topbar />
      <main className={classes.content}>
        {children}
        <Footer /> 
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
