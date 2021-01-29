import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Community = () => {
  const classes = useStyles();

  return (
   <div>Comunidad</div>
  );
};

export default Community;