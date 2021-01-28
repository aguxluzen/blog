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
  container:{
    display:"flex",
    widht:"100%",
    justifyContent:"space-between",
    alignItems:"center",
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      order:"2",
    },
    marginLeft: "4vw",  
  },
  item2:{
    alignSelf:"flex-end",
    marginRight:"4vw",
  },
  socialMedia: {
    justifyContent:"flex-end",
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
      <Grid container className={classes.container}>
        <Grid item className={classes.item}>
          <Box>
            <Typography variant="body1" color="inherit">
              &copy;
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
        <Grid item className={classes.item2}>
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