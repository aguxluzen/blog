import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Sections = () => {
  const classes = useStyles();

  return (
   <div>Secciones</div>
  );
};

export default Sections;