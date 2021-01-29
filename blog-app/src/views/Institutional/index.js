import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Institutional = () => {
  const classes = useStyles();

  return (
   <div>Institucional</div>
  );
};

export default Institutional;