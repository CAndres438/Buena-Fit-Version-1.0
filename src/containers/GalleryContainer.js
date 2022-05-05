import React from 'react'
import { makeStyles } from '@material-ui/core'
import Gallery from '../components/Gallery';
import { DarkTypographyStyled, GrayTitleStyled } from '../styled/styledComponents';
import Fade from 'react-reveal/Fade';

const GalleryContainer = () => {
    const classes = useStyles();
    
  return (
    <div className={classes.root}>
        <div className={classes.galleryContainer__title}>
        <p className={classes.galleryContainer__titlePrincipal}>COMPRA</p>
        <p className={classes.galleryContainer__titleSecondary}>¡Y OBTEN RESULTADOS!</p>
        <div className={classes.galleryContainer__gallery}>
        <Fade right>
        <Gallery categoria='Elite' />
        </Fade>
        </div>
        </div>
        <div className={classes.galleryContainer__title}>
        <p className={classes.galleryContainer__titlePrincipal}>Inspirado por tu historial de búsqueda</p>
        <div className={classes.galleryContainer__gallery}>
        <Fade left>
        <Gallery categoria='PopularProgress' />
        </Fade>

        </div>
        </div>

    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '94%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(8)
    },
    galleryContainer__title: {
        textAlign: 'center'
    },
    galleryContainer__gallery: {
        marginTop: theme.spacing(8)
    },
    galleryContainer__titlePrincipal:{
        color: '#5C5C5C',
        fontSize: '2.8rem',
        fontWeight: '750',
        fontStyle: 'italic',
        marginBottom: '.6rem',
        marginTop: '2rem',
    },
    galleryContainer__titleSecondary: {
        color: '#B9B9B9',
        fontSize: '1.3rem',
    }
}))

export default GalleryContainer