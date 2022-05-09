import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../helper/helper';

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
        <video className={classes.video__box} src={exercise.video} controls title="YouTube video player" poster='https://i.blogs.es/85d668/bench-press-1/1366_2000.jpg' height="500"></video>
        </div>
        </div>
        <h2>{ exercise.titulo }</h2>
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

      }
})) 