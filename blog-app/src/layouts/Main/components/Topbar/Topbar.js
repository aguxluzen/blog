import React  from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

import { SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    marginRight:"0vw",
  },
  flexGrow: {
    flexGrow: "1",
  },
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

const Topbar = () => {

  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar style={{marginRight:'3vw'}}>
        <div className={classes.flexGrow} />
        <div>
          <SidebarNav
            pages={pages}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;