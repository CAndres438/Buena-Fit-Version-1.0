import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAsync } from '../redux/actions/actionFisicos';
import Fisic from '../components/Fisic';

//Material UI
import { makeStyles, Typography } from '@material-ui/core';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { CustomAlert, SignUpButton } from '../styled/styledComponents';
import { Link, useNavigate } from 'react-router-dom';


const WithoutFisics = () => {
  const navigate = useNavigate();
  return (
    <CustomAlert>
        <MoodBadIcon></MoodBadIcon>
        <Typography>LO SENTIMOS</Typography>
        <Typography>No tenemos Fisicos agregados en esta etapa</Typography>
        <SignUpButton onClick={() => navigate('/')}>Agrega un Fisico</SignUpButton>
    </CustomAlert>
  )
}

const Fisics = () => {
  const classes = useStyles();
  const { fisics } = useSelector(store => store.fisics);
  const [selected, setSelected] = useState('volumen');

  const dispatch = useDispatch();

  const datosFiltrados = fisics.filter(item => item.etapa === selected);


  useEffect(() => {
    dispatch(listAsync());
  }, []);

 

  return (
  
    <div className={classes.Fisics}>
        <div className={classes.Fisics__content}>
            <h2>TRENDING FISICS</h2>
            <Link to='/'>Home</Link>
            <div className={classes.Fisics__contentFlex}>
              <h4 className={classes.Fisics__option} onClick={() => setSelected('volumen')}>Volumen</h4>
              <h4 className={classes.Fisics__option} onClick={() => setSelected('definicion')}>Definición</h4>
              <h4 className={classes.Fisics__option} onClick={() => setSelected('inicio')}>Inicio</h4>
            </div>
        </div>
    
        
        {/*  */}
        {datosFiltrados.length === 0?
         <WithoutFisics /> :
         <div className={classes.Fisics__container}>
           { datosFiltrados.map((item, index) => (
            <Fisic key={index} item={item} />
           ))}
         </div>
        }
        {/*  */}
       
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    Fisics: {
      width: '100%',
      minHeight: '100vh',
      padding: '2rem 0',
      position: 'relative',
      background: ' linear-gradient(90deg, rgba(58,59,64,1) 0%, rgba(102,103,107,1) 48%, rgba(102,103,107,1) 48%, rgba(49,50,55,1) 100%)'
    },
    Fisics__container: {
      width: '94%',
      margin: '4rem auto',
      border:'5px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'auto',
      gap: theme.spacing(4)
    },
    Fisics__content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    Fisics__contentFlex: {
      display: 'flex',
      gap: theme.spacing(6),
      margin: '1.4rem 0',
      textAlign: 'center',
      
    },
    Fisics__option: {
      fontWeight: '400',
      color: 'white',
      cursor: 'pointer',
    }
}))

export default Fisics