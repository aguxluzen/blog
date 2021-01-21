import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display:"flex",
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    marginLeft: theme.spacing(2)
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const SidebarNav = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map(page => (
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          <Button
            color="inherit"
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <div>
             {page.title}
            </div>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarNav;