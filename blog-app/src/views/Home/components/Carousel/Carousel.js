import { makeStyles } from "@material-ui/styles";
import { Grid, Box } from "@material-ui/core";
import images from "../../../../assets/images";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  img: {
    display: "flex",
    height: "50vh",
    background: "#000",
  },
  text: {
    position: "absolute",
    alignMargin: "center",
    marginRight: '5vw',
    marginLeft: '5vw',
    marginTop: '5vh'
  },
  
}));

function Carousel() {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item style={{ width: "100%" }}>
          <div>
            <Box className={classes.img}>
              <img
                alt="imag"
                style={{ width: "100%" }}
                src={images.img}
              />
              <div className={classes.text}>
                <div className={classes.titulo}>
                  <h1>Mariposa Monarca</h1>
                </div>
                <div className={classes.subtitulo}>
                  <p>
                    Las mariposas monarca son conocidas por la increíble migración masiva.
                  </p>
                </div>
                <div className={classes.footer}>
                  <p>Originarias de USA</p>
                </div>
              </div>
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Carousel;