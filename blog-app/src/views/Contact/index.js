import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useQuery } from "react-query";
import axios from "axios";
import usePosts from "../../hooks/posts/usePosts";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const Contact = () => {
  const classes = useStyles();
  const { data, isLoading } = usePosts();

  return <div>Contactanos</div>;
};

export default Contact;
