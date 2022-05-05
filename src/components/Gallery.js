import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { ButtonSecondary, LinkRedirect} from '../styled/styledComponents';
import { useDispatch, useSelector } from 'react-redux';
import { listAsync } from '../redux/actions/actionProducts';
import { selectedModal } from '../redux/actions/actionModal';
import { formatoCOP } from '../utils/Moneda';
import { addSyncToCart } from '../redux/actions/actionShoppingCart';




const Gallery = ({categoria}) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const { modal } = useSelector((store) => store.modal);

    const { products } = useSelector(store => store.products);

    const filtrado = products.filter(item => item.categoria === categoria);

    

    const enviarDatosModal = (codigo) => {
        dispatch(selectedModal(codigo));
    }
    
    useEffect(() => {
      dispatch(listAsync());
    }, [modal]);

    const addToCart = (productCart) => {
        dispatch(addSyncToCart (productCart));
        
      };

  return (
      
    <div className={classes.root}>
        {
            filtrado.map((card) => (
        <div key={card.codigo} className={classes.gallery__box}>
            <img onMouseEnter={() => enviarDatosModal(card)} 
            className={classes.gallery__image} src={card.image__front} alt="F" />
            <span className={classes.gallery__markPrice}>{formatoCOP.format(card.precio)}</span>
            <div className={classes.gallery__content}>
            <LinkRedirect to='/'>{card.nombre}</LinkRedirect>
            <ButtonSecondary type="button" onClick={() => addToCart(modal)}>Agregar al Carrito</ButtonSecondary>
            </div>
        </div>
            ))
        }
    </div>
    
  )
}

const useStyles = makeStyles((theme) => ({
    root: {

        "&::-webkit-scrollbar": {
            width: 7,
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "white",
            outline: `1px solid slategrey`,
            borderRadius: "5px",
          },
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        gap: theme.spacing(8),
        overflowX: 'scroll',
        height: '480px',
       

    },
    gallery__box: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        background: 'black',
        position: 'relative'
    },
    gallery__image: {
        width: '100%',
        height: '74%',
        objectFit: 'content',
        background: 'black',
        cursor: 'pointer',
        borderRadius: '10px'
    },
    gallery__markPrice: {
        position: 'absolute',
        backgroundColor: '#000',
        color: '#FFF',
        padding: '.5rem',
        marginTop: '10px',
        marginRight: '10px',
        borderRadius: '5px',
        right: 0
    },
    gallery__content: {
        width: "320px",
        display: 'flex',
        flexDirection: 'column',
        height: '100px',
        justifyContent:'end',
        marginTop: '0px'
    }
}));

export default Gallery