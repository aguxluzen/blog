import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import usePost from "../../../hooks/posts/usePost";
import { Grid, Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(4),
    },
      content: {
        display: "flex",
        height: "50vh",
        marginRight: "5vw",
        marginLeft: "5vw",
        background: "#e3f2fd",
        justifyContent:"center",
      },
      content1: {
        display: "flex",
        height: "100vh",
        background: "#e3f2fd",
        marginRight: "5vw",
        marginLeft: "5vw",
        marginTop: "5vh",
        marginBottom:"5vh",
        justifyContent:"center",
      },
      id: {
        marginTop:"15vh",
        alignSelf:"center",
      },
    }));

const PostView = () => {
    const classes = useStyles();
    const { id } = useParams();
    const { data , isLoading } = usePost(id);
    return (
        <>
        <Grid>
            <Grid className={classes.content}>
                <Box style={{marginTop:"10vh"}}>
                    <div className={classes.text}>
                    <Typography variant="h1" component="h2" >
                    vivir solo cuesta vida
                    </Typography>
                    </div>
                    <div className={classes.id}>
                    <Typography variant="h5" component="h5" >
                        1
                    </Typography>
                    </div>
                </Box>  
            </Grid>
            <Grid className={classes.content1}>
                <Box style={{marginTop:"10vh"}}>
                    <div className={classes.text}>
                    <Typography variant="h1" component="h2" >
                        cuanto mas vivir asi cuanto te puede costar
                    </Typography>
                    </div>
                </Box>  
            </Grid>
        </Grid>
        </>
    );      
}
export default PostView; 