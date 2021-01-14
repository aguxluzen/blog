import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item style={{ width: "100%" }}>
          <Box
            display="flex"
            width="100%"
            height="40vh"
            style={{ backgroundColor: "#000" }}
          >
            <img src="https://cienciaybiologia.com/wp-content/uploads/2015/09/morpho-didius-mariposa-1280x720.jpg" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
