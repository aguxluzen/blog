import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, Grid, Box } from '@material-ui/core';
import { Instagram, Twitter, Facebook } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    background: "#e3f2fd",
  },  
  icon: {
    marginLeft:"1vw",
    marginRight:"1vw",
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid container >
        <Grid item>
          <Typography variant="body1" color="inherit">
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
          </Typography>
          </Grid>
            <Grid item style={{marginLeft:"54vw"}}>
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
            </Grid> 
      </Grid>
    </div>
  );
};

export default Footer;