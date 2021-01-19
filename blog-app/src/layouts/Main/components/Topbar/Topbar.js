import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';

import { SidebarNav } from '../Sidebar/components';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    marginRight:"0vw",
  },
  flexGrow: {
    flexGrow: "1",
  },
  button: {
    marginLeft: theme.spacing(2)
  }
}));

const pages = [
  {
    title: 'Secciones',
    href: '/sections',
  },
  {
    title: 'Comunidad',
    href: '/community',
  },
  {
    title: 'Institucional',
    href: '/institutional',
  },
  {
    title: 'Contactanos',
    href: '/contact',
  }
];

const Topbar = props => {

  const { open, variant, onClose, className, ...rest } = props;
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar style={{marginRight:'3vw'}}>
        <div className={classes.flexGrow} />
          <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
