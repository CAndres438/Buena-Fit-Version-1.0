import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../helper/helper";
import Footer from "../components/Footer";

const initialState = {
    id: 2,
    categoria: "superior",
    complejidad: 3,
    titulo: "pull over",
    dificultad: {
        "facil": {
            "reps": 6,
            "desc": "1m"
        },
        "normal": {
            "reps": 10,
            "desc": "40s"
        },
        "dificil": {
            "reps": 14,
            "desc": "20s"
        }
    },
    preparacion: 60,
    duracion: 20,
    musculosPorcentajes: [
        "pectoral mayor", 20, "tríceps", 58, "deltoides anterior", 58, "deltoides lateral", 70, "Escapula", 90, "redondo mayor", 84
    ],
    zona: "pecho",
    image: "https://res.cloudinary.com/duzncuogi/image/upload/v1652146763/samples/Buona-Fit-Demo-Day/EJERCICIOS/TREN%20SUPERIOR/PECHO/PRESS/2/pullover_aeimx4.jpg",
    poster: "https://res.cloudinary.com/duzncuogi/image/upload/v1652146763/samples/Buona-Fit-Demo-Day/EJERCICIOS/TREN%20SUPERIOR/PECHO/PRESS/2/pullover_aeimx4.jpg",
    video: "https://res.cloudinary.com/duzncuogi/video/upload/v1652146195/samples/Buona-Fit-Demo-Day/EJERCICIOS/TREN%20SUPERIOR/PECHO/PRESS/2/pullover_d96gpx.mp4",
    descripcion1: "Para iniciar la realización del ejercicio es necesario acostarse en un banco plano con los glúteos, caderas y hombros sobre el banco. Los pies deben apoyarse en suelo, separados un poco más allá del ancho de lo hombros. Con las manos debemos tomar la barra de manera que las palmas miren hacia adelante, es decir, en pronación, y separadas ligeramente más allá de la anchura de los hombros.",
    descripcion2: "El brazo y el antebrazo deben formar un ángulo de 90º, por lo que debemos flexionar el codo de manera que la barra tomada con las manos quede exactamente encima del pecho.",
    ejercicio: "Desde allí debemos inspirar y descender lentamente la barra hacia el pecho, sin despegar la espalda del banco. Una vez la barra esté sobre el pecho debemos empujar hacia arriba mientras espiramos y subimos lentamente los brazos.",
    ejercicio2:"Tomaremos una barra con las manos, de manera que las palmas miren hacia arriba, es decir, con agarre en supinación. Las manos deben estar separadas en la barra un poco más allá de la anchura de los hombros.",
    ejercicio3: "Desde esta posición, sin movilizar el tronco y manteniendo los codos a los lados del cuerpo, debemos inspirar y flexionar los codos mientras acercamos la barra al pecho y contraemos glúteos, abdominales y espinales para no mover el tronco.",
    musculos: "Con press de banca solicitamos principalmente el pectoral mayor, aunque también se demanda el trabajo del pectoral menor, los tríceps, el deltoides anterior, los serratos y el coracobraquial.",
    errores: {
        error1: "Arquear la espalda y despegarla del banco al levantar la barra. Esto puede dañar la espalda al intentar ayudarnos arqueando la misma, donde despegamos al zona lumbar del punto de apoyo.",
        error2: "Realizar movimientos bruscos y rebotar. Al ser un ejercicio de musculación los resultados será mejores y el movimiento más seguro si evitamos rebotar la barra contra el pecho, así como si evitamos dar tirones con la barra, pues lo mejor es realizar un movimiento controlado durante todo el recorrido del ejercicio, de manera que trabajen los músculos antes dichos y evitemos lesiones.",
        error3: "Los codos descienden hacia la cintura. Para que el trabajo del pectoral sea correcto, los codos deben descender alineados con los hombros y no debemos tirar los brazos hacia la cintura al bajar la barra."
    }
};


const Exercise = () => {
  const classes = useStyles();
  const [exercise, setExercise] = useState(initialState);

  const { id } = useParams();

  useEffect(() => {
    const getData = () => {
      axios
        .get(URL + id)
        .then((resp) => {
          setExercise(resp.data);
          console.log(resp.data.musculosPorcentajes[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, [id]);

  return (
    <div className={classes.exercise}>
      <div className={classes.container}>
        <div className={classes.exercise__container}>
          <video
            className={classes.video__box}
            src={exercise.video}
            controls
            title="YouTube video player"
            poster={exercise.poster}
            height="500"
          ></video>
        </div>
        <div></div>
      </div>
      <div className={classes.exercise__infoContainer}>
        <img
          className={classes.exercise__image}
          src={exercise.image}
          alt="Exercise Figure"
        />

        <div className={classes.exercise__textContainer}>
          <h2 className={classes.exerciseTitle}>{exercise.titulo}</h2>
          <div className={classes.exercise__infoDescriptions}>
            <p className={classes.detailText}>{exercise?.descripcion1}</p>
            <p className={classes.detailText}>{exercise?.descripcion2}</p>
            <p className={classes.detailText}>{exercise?.descripcion3}</p>
          </div>
        </div>
      </div>  
    {/* STATISTICS */}
    <div className={classes.divider}>
        <div className={classes.divider__container}>
          <div className={classes.divider__boxAvatar}>
          <img className={classes.divider__boxImage} src={ exercise.poster}/>
         
          </div>

          <div className={classes.divider__roles}>
          <div>
              <h2 className={classes.divider__statisticsTitle}>preparación</h2>
              <progress className={classes.progress} value={exercise.preparacion} min="0" max="100"></progress>
            </div>

            <div>
              <h2 className={classes.divider__statisticsTitle}>Duración</h2>
              <progress className={classes.progress} value={exercise.duracion} min="0" max="30"></progress>
            </div>

            <div>
              <h2 className={classes.divider__statisticsTitle}>Complejidad</h2>
              <progress className={classes.progress} value={exercise.complejidad} min="0" max="3"></progress>
            </div>

            {/*  */}
            <div>
              <h2 className={classes.divider__statisticsTitle}>{exercise?.musculosPorcentajes[0]}</h2>
              <progress className={classes.progress} value={exercise?.musculosPorcentajes[1]} min="0" max="100"></progress>
            </div>

            <div>
              <h2 className={classes.divider__statisticsTitle}>{exercise?.musculosPorcentajes[2]}</h2>
              <progress className={classes.progress} value={exercise?.musculosPorcentajes[3]} min="0" max="100"></progress>
            </div>

            <div>
              <h2 className={classes.divider__statisticsTitle}>{exercise?.musculosPorcentajes[4]}</h2>
              <progress className={classes.progress} value={exercise?.musculosPorcentajes[5]} min="0" max="100"></progress>
            </div>

            {/*  */}

            <div>
              <h2 className={classes.divider__statisticsTitle}>{exercise?.musculosPorcentajes[6]}</h2>
              <progress className={classes.progress} value={exercise?.musculosPorcentajes[7]} min="0" max="100"></progress>
            </div>

            <div>
              <h2 className={classes.divider__statisticsTitle}>{exercise?.musculosPorcentajes[8]}</h2>
              <progress className={classes.progress} value={exercise?.musculosPorcentajes[9]} min="0" max="100"></progress>
            </div>

            <div>
              <h2 className={classes.divider__statisticsTitle}>{exercise?.musculosPorcentajes[10]}</h2>
              <progress className={classes.progress} value={exercise?.musculosPorcentajes[11]} min="0" max="100"></progress>
            </div>

        {/*  */}

          </div>

        
<div>
  <h2 className={classes.divider__title}>EJERCICIO</h2>
</div>
<div>
  <h2 className={classes.divider__title}>MÚSCULOS IMPLICADOS</h2>
</div>
<div>
</div>
        </div>
      </div>
    {/* STATISTICS */}

    
      <div className={classes.exercise__listContainer}>
      <h2 className={classes.exerciseTitle}>RECOMENDACIONES</h2>

        <ol className={classes.competition__boxTwoList}>
          <li className={classes.competition__boxTwoLi}>
            <b>{exercise?.ejercicio}</b>
          </li>
          <h2 className={classes.exerciseTitle}>ERRORES MÁS FRECUENTES</h2>
          <li className={classes.competition__boxTwoLi}>
            Los errores más frecuentes y recomendaciones al ejecutar el
            ejercicio de{" "}
            <span>
              {" "}
              <b>{exercise?.titulo}</b>
            </span>
            , son:
            <ul className={classes.competition__boxListInside}>
              <li className={classes.competition__boxTwoLi}>
                <b>{exercise?.errores?.error1}</b>
              </li>
              <li className={classes.competition__boxTwoLi}>
                <b>{exercise?.errores?.error2}</b>
              </li>
              <li className={classes.competition__boxTwoLi}>
                <b>{exercise?.errores?.error3}</b>
              </li>
            </ul>
          </li>
          <li className={classes.competition__boxTwoLi}>
            <b>
              Descansa el tiempo suficiente entre cada sesión: Seguir una rutina
              de entrenamientos compensada con el descanso adecuado es otro de
              los factores a tener en cuenta para alcanzar tu objetivo. Debes
              considerar que, si has escogido el entrenamiento HIIT como método
              para definir tus músculos, este no está exento de desventajas. La
              principal es que, debido al sobre entrenamiento al que se expone
              nuestro cuerpo, el sistema nervioso central puede verse afectado y
              causar daño muscular, tensión mecánica o estrés metabólico.
            </b>
          </li>
          <p className={classes.competition__boxTwoLi}>
            Para evitar estas consecuencias,{" "}
            <b>
              debes tomar un mínimo de 48 horas de descanso entre cada sesión de
              trabajo de alta intensidad.
            </b>{" "}
            Ten en cuenta que en estos casos, prevalece la máxima de “menos es
            más”, así que con 2 o 3 entrenamientos semanales tendrías
            suficiente.
          </p>
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default Exercise;

const useStyles = makeStyles((theme) => ({
  exercise: {
    width: "100%",
    position: "relative",
    height: "0vh",
  },
  exercise__container: {
    width: "60%",
    margin: "0 auto",
  },
  video__box: {
    width: "100%",
    height: "500px",
    backgroundColor: "#000",
    objectFit: "cover",
    marginTop: "0rem",
    [theme.breakpoints.down("sm")]: {
      height: "500px",
    },
  },
  container: {
    width: "100%",
    backgroundColor: "#000",
  },
  // Exercise Info
  exercise__infoContainer: {
    width: "80%",
    margin: "4rem auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(4),
  },
  exercise__image: {
    width: "100%",
    height: "400px",
  },
  exercise__textContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
  },
  exercise__infoDescriptions: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
    textAlign: "justify",
  },
  exerciseTitle: {
    fontSize: "2.4rem",
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
    margin: "2rem 0",
    textTransform: "uppercase",
  },
  detailText: {
    fontSize: "1.2rem",
    color: "#333",
    fontWeight: "600",
  },
  // Exercise List Container
  exercise__listContainer: {
    width: "60%",
    margin: "3rem auto",
  },
  competition__boxTwoList: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  competition__boxTwoLi: {
    fontSize: "1.3rem",
    color: "#333",
    fontWeight: "600",
    textAlign: "justify",
  },
  competition__boxListInside: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    marginLeft: "2.8rem",
    margin: "1rem 0",
    textAlign: "justify",
  },
  // DIVIDER
  divider: {
    position: 'relative',
    backgroundColor: '#000',
    height: '420px',
    padding: '2rem 0',
    zIndex: '4000000',
    [theme.breakpoints.down('sm')]: {
      height: '700px'
    }
   
  },
  divider__container: {
    width: '94%',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '.5fr 1fr',
    gap: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    }
  },
  divider__boxAvatar: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%',
    height: '240px',
  },
  divider__boxImage: {
    width: '100%',
    height: '240px'
  },
  //BOX 3
  divider__statistics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(2),
    color: '#FFF',

  },
  // Progress Bar
  progress: {
    backgroundColor: 'blue',
    width: '100%',
    height: '.6rem',
    zIndex: '10000',
    border: '1px solid #000',
    "&::-webkit-progress-bar": {
      backgroundColor: '#1C1F20'
    },
    "&::-webkit-progress-value": {
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 0px 5px #427ed1, 0px 0px 5px #427ed1'
    }
  },
  divider__roles: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(2),
    textAlign: 'center'
  },
  divider__title: {
    textAlign: 'center',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textShadow: '1px 1px 2px #000',
    marginTop: '12px',
    color: '#969696'
  },
  divider__statisticsTitle: {
    color: '#FFF',
    textTransform: 'capitalize'
  },
  divider__statisticsBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    "& h3": {
      display: 'flex',
      alignItems: 'start',
      gap: theme.spacing(.8)
    }
  }
}));
