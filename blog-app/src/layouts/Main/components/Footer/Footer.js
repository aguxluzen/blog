import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, Grid, Box } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Instagram, Twitter } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    background: "#ffea00",
  },
  container: { 
    flexDirection:'row-reverse',
  },
  icons: {
    marginRight:"3.5vw",
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
        <Grid item>
          {/* <Typography variant="body1" color="inherit">
            &copy;{' '}
            <Link
              component="a"
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
          </Typography> */}
          </Grid>
            <Grid item className={classes.icons} >
              <Instagram/>
              <FacebookIcon/>
              <Twitter/> 
            </Grid> 
      </Grid>
    </div>
  );
};

export default Footer;
