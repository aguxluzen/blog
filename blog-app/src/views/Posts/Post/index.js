import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import usePost from "../../../hooks/posts/usePost";
import { Grid, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Post from "../../../views/Home/components/Posts/Post";

const useStyles = makeStyles({
    root: {
        height: "50vh",
        marginDown: "5vh",
        width:"50%",
      },
      content: {
        display: "flex",
        widht: "100%",
        
        background: "gray",
        marginRight: "5vw",
        marginLeft: "5vw",
      },
    });

function PostView() {
    const classes = useStyles();
    const { id } = useParams();
    const { data, isLoading } = usePost(id);

    return (
        <>
        <Box className={classes.content}>
            <Typography>
                <h1>

                {data.body}
                </h1>
            </Typography>
        </Box>
        </>
    )        
}
export default PostView; 