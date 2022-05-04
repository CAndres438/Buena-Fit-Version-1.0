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
        <GrayTitleStyled>COMPRA</GrayTitleStyled>
        <DarkTypographyStyled>¡Y OBTEN RESULTADOS!</DarkTypographyStyled>
        <div className={classes.galleryContainer__gallery}>
        <Fade right>
        <Gallery categoria='Elite' />
        </Fade>
        </div>
        </div>
        <div className={classes.galleryContainer__title}>
        <GrayTitleStyled>Inspirado por tu historial de búsqueda</GrayTitleStyled>
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
    }
}))

export default GalleryContainer