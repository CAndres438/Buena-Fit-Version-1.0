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
          <p className={classes.home__titlePrincipal}>Buona Fit Innovando en el Mundo del Fitness</p>
          <div className={classes.text__container}>
          <p className={classes.home__text}>
            Por muchos años el mundo saludable ha estado ligado al mismo enfoque de desarrollo fisico, ignorando
            por completo los conceptos cientificos, además de prometer resultados milagrosos a base de suplementos que en la mayoría de los casos
            no tienen garantía de resultados, sumados a usos en momentos inprecisos. Buona Fit no es un proveedor, es un amigo
            para todos aquellos deportistas, sedentarios dando el primer paso, madres en su recuperación postparto, estudiantes Universitarios,
            y en general para cualquiera. 
          </p>
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
    height: "100%",
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
    margin: "6rem auto",
    display: "grid",
    gridTemplateColumns:'2fr 2fr',
    gap: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns:'1fr',
    }
  },

  home__content: {
    width: "100%",
    [theme.breakpoints.down('sm')]: {
      marginBottom:'3.2rem',
    }
  },
  home__images: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 280px)",
    position: "relative",
    [theme.breakpoints.down('sm')]: {
      justifyContent:'center'
    },
    "& img": {
      width: "100%",
      height: "auto",
    },
  },
  home__imageOne: {
    position: "relative",
    borderRadius: "10px 0 10px 10px",
    width: "auto",
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  home__imageTwo: {
    position: "relative",
    borderRadius: "10px 10px 10px 0",
    width: "auto",
    top: "-40px",
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  home__titlePrincipal: {
    color: '#5C5C5C',
    fontSize: '2.8rem',
    fontWeight: '750',
    fontStyle: 'italic',
    marginBottom: '.6rem',
    marginTop: '2rem',
  },
  home__text:{
    color: '#333',
    fontSize: '1rem'

  }
}));

export default Home;