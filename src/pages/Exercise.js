import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../helper/helper';
import Footer from '../components/Footer';

const Exercise = () => {
  const classes = useStyles();
  const [exercise, setExercise] = useState([]);

//   const { exercise } = useSelector(store => store.exercise);

  const { id } = useParams();

  useEffect(() => {
    const getData = () => {
        axios.get(URL + id)
        .then((resp) => {
            console.log(resp, 'RESP AXIOS EXERCISE');
            setExercise(resp.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    getData();
  }, [id])

  return (
    <div className={classes.exercise}>
        <div className={classes.container}>
        <div className={classes.exercise__container}>
        <video className={classes.video__box} src={exercise.video} controls title="YouTube video player" poster={ exercise.poster } height="500"></video>
        </div>
        <div>

        </div>
        </div>
        <div className={classes.exercise__infoContainer}>
        <img className={classes.exercise__image} src={exercise.image} alt='Exercise Figure'/>

        <div className={classes.exercise__textContainer}>
        <h2 className={classes.exerciseTitle}>{ exercise.titulo }</h2>
        <div className={classes.exercise__infoDescriptions}>
        <p className={classes.detailText}>{ exercise?.descripcion1}</p>
        <p className={classes.detailText}>{ exercise?.descripcion2}</p>
        <p className={classes.detailText}>{ exercise?.descripcion3}</p>
        </div>
        </div>
        </div>

        <div className={classes.exercise__listContainer}>
        <ol className={classes.competition__boxTwoList}>
                <li className={classes.competition__boxTwoLi}><b>{ exercise?.ejercicio }</b></li>
                <h2 className={classes.exerciseTitle}>ERRORES MÁS FRECUENTES</h2>
                <li className={classes.competition__boxTwoLi}>Los errores más frecuentes y recomendaciones al ejecutar el ejercicio de <span> <b>{ exercise?.titulo }</b></span>, son:
                <ul className={classes.competition__boxListInside}>
                    <li className={classes.competition__boxTwoLi}><b>{ exercise?.errores?.error1 }</b></li>
                    <li className={classes.competition__boxTwoLi}><b>{ exercise?.errores?.error2 }</b></li>
                    <li className={classes.competition__boxTwoLi}><b>{ exercise?.errores?.error3 }</b></li>
                </ul>
                </li>
                <li className={classes.competition__boxTwoLi}><b>Descansa el tiempo suficiente entre cada sesión: Seguir una rutina de entrenamientos compensada con el descanso adecuado es otro de los factores a tener en cuenta para alcanzar tu objetivo. Debes considerar que, si has escogido el entrenamiento HIIT como método para definir tus músculos, este no está exento de desventajas. La principal es que, debido al sobre entrenamiento al que se expone nuestro cuerpo, el sistema nervioso central puede verse afectado y causar daño muscular, tensión mecánica o estrés metabólico.</b></li>
                <p className={classes.competition__boxTwoLi}>Para evitar estas consecuencias, <b>debes tomar un mínimo de 48 horas de descanso entre cada sesión de trabajo de alta intensidad.</b> Ten en cuenta que en estos casos, prevalece la máxima de “menos es más”, así que con 2 o 3 entrenamientos semanales tendrías suficiente.</p>
            </ol>
            </div>
            <Footer />
    </div>
  )
}

export default Exercise

const useStyles = makeStyles((theme) => ({
    exercise: {
        width: '100%',
        position: 'relative',
        height: '0vh',
    },
    exercise__container: {
        width: '60%',
        margin: '0 auto'
    },
    video__box: {
        width: '100%',
        height:'500px',
        backgroundColor: '#000',
        objectFit: 'cover',
        marginTop: '0rem',
        [theme.breakpoints.down('sm')]: {
          height:'500px',
        }
      },
      container: {
          width: '100%',
          backgroundColor: '#000',
      },
      // Exercise Info
      exercise__infoContainer: {
        width: '80%',
        margin: '4rem auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: theme.spacing(4)
      },
      exercise__image: {
        width: '100%',
        height: '400px'
      },
      exercise__textContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(4)
      },
      exercise__infoDescriptions: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(4)
      },
      exerciseTitle: {
        fontSize: '2.4rem',
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '2rem 0',
        textTransform: 'uppercase'
      },
      detailText: {
        fontSize: '1.2rem',
        color: '#333',
        fontWeight: '600'
      },
      // Exercise List Container
      exercise__listContainer: {
        width: '60%',
        margin: '3rem auto'
      },
      competition__boxTwoList: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2)
      },
      competition__boxTwoLi: {
        fontSize: '1.3rem',
        color: '#333',
        fontWeight: '600'
      },
      competition__boxListInside: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        marginLeft: '2.8rem',
        margin: '1rem 0',
      }
})) 