import { makeStyles } from "@material-ui/core";
import SupportEngine from "../SupportEngine";
import { GrayLightTypographyStyled, GrayTitleStyled } from '../styled/styledComponents'
import GalleryContainer from "../containers/GalleryContainer";
import MapView from "./MapView";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";






const Home = () => {
  const classes = useStyles();
  const [image, setImage] = useState({
    categoria: "¿QUÉ ES LO QUE BÚSCAS?",
    image: "https://www.cope.es/blogs/t-cuidamos/wp-content/uploads/sites/12/2018/12/gimnasio.jpg"
  });

  return (
    <div className={classes.home}>
      <div className={classes.home__opacity}>
        <img
          className={classes.home__banner}
          src="https://cdn.pixabay.com/photo/2018/01/01/01/56/yoga-3053487_960_720.jpg"
          alt="Banner Principal"
        />
        <div className={classes.banner__fadeBottom}></div>
      </div>
      <div className={classes.category__workout}>
              <div className={classes.category__workoutFlex}>
                <div className={classes.category__workoutContentImage}>
                <img className={classes.category__workoutImage} src={image.image} alt='Workout 1'/>
                <span className={classes.category__workoutSpan}>{image.categoria}</span>
                </div>
              </div>
              <div className={classes.category__workoutFilter}>
                
                <div className={classes.category__workoutPathBox} onMouseEnter={() => setImage({
                  categoria: "Aumento",
                  image: "https://img.freepik.com/foto-gratis/hombre-atletico-fuerte-modelo-fitness-masculino-hermoso-que-muestra-torso-desnudo-cuerpo-musculoso-foto-estudio-sobre-fondo-negro-concepto-culturismo_116547-9372.jpg"
                })} style={{
                  left: '56%',
                  transform: 'translateX(-50%)'
                }}>
                  <Link to="/aumenta"><img className={classes.category__workoutImagePath} src="https://img.freepik.com/foto-gratis/hombre-atletico-fuerte-modelo-fitness-masculino-hermoso-que-muestra-torso-desnudo-cuerpo-musculoso-foto-estudio-sobre-fondo-negro-concepto-culturismo_116547-9372.jpg" alt="Workout Filter 1"/></Link>
                </div>
                <div className={classes.category__workoutPathBox} onMouseEnter={() => setImage({
                  categoria: "Definición",
                  image:'https://us.123rf.com/450wm/valeriylebedev/valeriylebedev1501/valeriylebedev150100438/35826714-posando-culturista-poder-guapo-chico-atl%C3%A9tico-masculino-musculoso-cuerpo-de-fitness-en-el-fondo-negr.jpg'
                })} style={{
                  left: '68%',
                  transform: 'translateX(-50%)'
                }}>
                  <Link to="/define"><img className={classes.category__workoutImagePath} src="https://us.123rf.com/450wm/valeriylebedev/valeriylebedev1501/valeriylebedev150100438/35826714-posando-culturista-poder-guapo-chico-atl%C3%A9tico-masculino-musculoso-cuerpo-de-fitness-en-el-fondo-negr.jpg" alt="Workout Filter 1"/></Link>
                </div>
                <div className={classes.category__workoutPathBox} onMouseEnter={() => setImage({
                  categoria: "Funcional",
                  image: 'https://media.istockphoto.com/photos/athlete-at-starting-line-picture-id636887418?k=20&m=636887418&s=612x612&w=0&h=MBnEUG4vulPQ8XrxtfS3I03jZmprS3zAxFLe_VGuBGI='
                })} style={{
                  left: '44%',
                  transform: 'translateX(-50%)'
                }}>
                  <Link to="/evoluciona"><img className={classes.category__workoutImagePath} src="https://media.istockphoto.com/photos/athlete-at-starting-line-picture-id636887418?k=20&m=636887418&s=612x612&w=0&h=MBnEUG4vulPQ8XrxtfS3I03jZmprS3zAxFLe_VGuBGI=" alt="Workout Filter 1"/></Link>
                </div>
                <div className={classes.category__workoutPathBox} onMouseEnter={() => setImage({
                  categoria: "Competición",
                  image: 'https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/q7atphktrkx9a4oxvdwr.jpg'
                })} style={{
                  left: '32%',
                  transform: 'translateX(-50%)'
                }}>
                 <Link to="/compite"><img className={classes.category__workoutImagePath} src="https://classpass-res.cloudinary.com/image/upload/f_auto/q_auto/q7atphktrkx9a4oxvdwr.jpg" alt="Workout Filter 1"/></Link> 
                </div>
              </div>
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
    height: "81vh",
  },
  home__opacity: {
    position: "relative",
  },
  home__banner: {
    width: "100%",
    height: '80vh',
    position: "relative",
    objectFit: 'cover'
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

  },
  // CATEGORY__WORKOUT
  category__workout: {
    display: 'flex',
    flexDirection: 'column'
  },
  category__workoutFlex: {
    display: 'grid',
    // gridTemplateColumns: '1fr 1fr',
        gridTemplateColumns: '1fr',

    // height: '340px',
    height: '400px',
    overflow: 'hidden',
    backgroundColor: '#000'
  },
  category__workoutImage: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    cursor: 'pointer',
    transition: 'all .3s ease-in',
    '&:hover': {
      transform: 'scale(1.1)',
      opacity: '.6'
    },
  },
  category__workoutContentImage: {
    position: 'relative',
    width: '100%',
    height: '100%',
   

  },
  category__workoutSpan: {
    position: 'absolute',
    fontSize: '2.4rem',
    color: '#FFF',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
    textTransform: 'uppercase'
  },
  // Workout Filters
    category__workoutFilter: {
      width: '100%',
      backgroundColor: '#000',
      height: '200px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 200px)',
      justifyContent: 'center',
      // backgroundColor: 'transparent',
      padding: '0 15rem',
      position: 'relative',
    },
    category__workoutPathBox: {
      width: '240px',
      height: '100%',
      backgroundColor: '#FFF',
      clipPath: 'polygon(35% 0, 100% 0, 65% 100%, 0% 100%)',
      position: 'absolute',
      // zIndex: '100000'
    },
    category__workoutImagePath: {
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      clipPath: 'polygon(35% 0, 100% 0, 65% 100%, 0% 100%)',
      cursor: 'pointer',
      transition: 'all .3s ease-in',
      left: '0',
      '&:hover': {
        transform: 'scale(1.1)',
        opacity: '.6'
      },
    }
}));

export default Home;