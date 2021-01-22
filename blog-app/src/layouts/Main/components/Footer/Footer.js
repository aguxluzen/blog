import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, Grid, Box } from '@material-ui/core';
import { Instagram, Twitter, Facebook } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    background: "#eceff1",
  },  
  icon: {
    marginLeft:"1vw",
    marginRight:"1vw",
  },
  item: {
    [theme.breakpoints.down('md')]: {
      justifyContent:"left",
      alignItems:"left",
      marginLeft:"0vw",
      order:"2",
    },
    marginLeft:'3.5vw',
  },
  socialMedia: {
    [theme.breakpoints.down('md')]: {
      justifyContent:"right",
      alignItems:"right",
      marginLeft:"69vw",
    },
    marginLeft: "53vw",
  },
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid container style={{widht:"100%"}}>
        <Grid item className={classes.item}>
          <Box>
            <Typography variant="body1" color="inherit">
              &copy;{' '}
              <Link
                href="https://devias.io/"
                target="_blank"
              >
                Devias IO
              </Link>
              . 2021
            </Typography>
            <Typography variant="caption" color="inherit">
              Created with love for the environment. By designers and developers who
              love to work together in offices!
            </Typography>
          </Box>  
        </Grid>
        <Grid item style={{widht:"100%", display:"flex"}}>
          <Box className={classes.socialMedia}>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
            >
              <Instagram/>
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
            >
              <Twitter className={classes.icon}/>
            </Link>
            <Link
              href="https://es-la.facebook.com/"
              target="_blank"
            >
              <Facebook/>
            </Link>
          </Box>    
        </Grid> 
      </Grid>
    </div>
  );
};

export default Footer;