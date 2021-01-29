import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Contact = () => {
  const classes = useStyles();

  return (
   <div>Contactanos</div>
  );
};

export default Contact;