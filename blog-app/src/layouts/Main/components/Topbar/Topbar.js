import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    marginRight:"0vw",
  },
  flexGrow: {
    flexGrow: "1",
  },
  signOutButton: {
    marginLeft: theme.spacing(2)
  }
}));

const Topbar = props => {

  const classes = useStyles();
  const [notifications] = useState([]);

  return (
    <AppBar>
      <Toolbar style={{marginRight:'3vw'}}>
        <div className={classes.flexGrow} />
          <Hidden mdDown>
            <IconButton color="inherit">
              <h7>Secciones</h7>
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
              </Badge>
            </IconButton>
            <IconButton
              className={classes.signOutButton}
              color="inherit"
            >
              <h7>Comunidad</h7>
            </IconButton>
            <IconButton
              className={classes.signOutButton}
              color="inherit"
            >
              <h7>Institucional</h7>
            </IconButton>
            <IconButton
              className={classes.signOutButton}
              color="inherit"
            >
              <h7>Contactanos</h7>
            </IconButton>
          </Hidden> 
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
