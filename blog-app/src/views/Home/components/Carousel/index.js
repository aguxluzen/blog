import { makeStyles } from "@material-ui/styles";
import { Typography, Grid, Box } from "@material-ui/core";
import images from "../../../../assets/images";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  img: {
    display: "flex",
    height: "50vh",
  },
  container: {
    display:"flex",
    flexDirection:"row-reverse",
  },
  text: {
    position: "absolute",
    alignMargin: "center",
    marginRight: '5vw',
    marginLeft: '5vw',
  },
  subtext: {
    position:"absolute",
    alignMargin: "center",
    marginRight: '35vw',
    marginLeft: '5vw',
    marginTop:"15vh",
  },
}));

function Carousel() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.container}>
        <Grid item style={{ width: "100%" }}>
          <div>
            <Box className={classes.img}>
              <img
                alt="imag"
                style={{ width: "100%" }}
                src={images.img}
              />
              <div className={classes.text}>
                <h1>Mariposa Monarca</h1>
              </div>
              <div className={classes.subtext}>
                <p style={{display: "flex"}}>
                  Las mariposas monarca son conocidas por la increíble migración masiva que cada invierno lleva a millones de ejemplares a California y México. La monarca norteamericana es la única mariposa que realiza una travesía tan espectacular, con una distancia cercana a los 5.000 kilómetros.
                </p> 
              </div>   
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Carousel;
