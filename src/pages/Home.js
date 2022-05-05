import { makeStyles } from "@material-ui/core";
import SupportEngine from "../SupportEngine";
import { GrayLightTypographyStyled, GrayTitleStyled } from '../styled/styledComponents'
import GalleryContainer from "../containers/GalleryContainer";
import MapView from "./MapView";
import Footer from "../components/Footer";






const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <div className={classes.home__opacity}>
        <img
          className={classes.home__banner}
          src="https://cdn.pixabay.com/photo/2016/11/19/12/43/barbell-1839086_960_720.jpg"
          alt="Banner Principal"
        />
        <div className={classes.banner__fadeBottom}></div>
      </div>
      <SupportEngine />

      <div className={classes.home__container}>
        <div className={classes.home__content}>
          <GrayTitleStyled className={classes.home__title}>Buona Fit Innovando en el Mundo del Fitness</GrayTitleStyled>
          <div className={classes.text__container}>
          <GrayLightTypographyStyled>
            Por muchos años el mundo saludable ha estado ligado al mismo enfoque de desarrollo fisico, ignorando
            por completo los conceptos cientificos, además de prometer resultados milagrosos a base de suplementos que en la mayoría de los casos
            no tienen garantía de resultados, sumados a usos en momentos inprecisos. Buona Fit no es un proveedor, es un amigo
            para todos aquellos deportistas, sedentarios dando el primer paso, madres en su recuperación postparto, estudiantes Universitarios,
            y en general para cualquiera. 
          </GrayLightTypographyStyled>
          </div>
        </div>
        <div className={classes.home__images}>
          <img
            className={classes.home__imageOne}
            src="https://img.freepik.com/free-photo/handsome-power-athletic-man-bodybuilder-fitness-muscular-body-on-dark-smoke-background-perfect-male-awesome-bodybuilder-tattoo-posing_136403-1995.jpg"
            alt="home one"
          />
          <img
            className={classes.home__imageTwo}
            src="https://img.freepik.com/free-photo/handsome-power-athletic-man-bodybuilder-fitness-muscular-body-on-dark-smoke-background-perfect-male-awesome-bodybuilder-tattoo-posing_136403-1988.jpg"
            alt="home two"
          />
        </div>
      </div>
      <GalleryContainer/>
      <MapView/>
      <Footer/>
    </div>
    
  );
};

const useStyles = makeStyles((theme) => ({
  home: {
    width: "100%",
    position: "relative",
    height: "100vh",
  },
  home__opacity: {
    position: "relative",
  },
  home__banner: {
    width: "100%",
    position: "relative",
  },
  banner__fadeBottom: {
    position: "absolute",
    top: "45vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37,37,37, 0.61), #000)",
  },
  home__container: {
    width: "94%",
    margin: "10rem auto",
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(4),
  },

  home__content: {
    width: "580px",
  },
  home__images: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 300px)",
    position: "relative",
    "& img": {
      width: "110%",
      height: "auto",
    },
  },
  home__imageOne: {
    position: "relative",
    borderRadius: "10px",
    width: "auto",
  },
  home__imageTwo: {
    position: "relative",
    borderRadius: "10px",
    width: "auto",
    top: "-40px",
  },
  home__title: {
    fontSize: '2rem'
  }
}));

export default Home;