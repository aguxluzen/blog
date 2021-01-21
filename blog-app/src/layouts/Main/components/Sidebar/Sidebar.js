import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Drawer } from '@material-ui/core';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import PeopleIcon from '@material-ui/icons/People';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div>
    </div>
  );
};

export default Sidebar;