import React from 'react';

//Material UI
import { makeStyles, Typography } from '@material-ui/core';
import { ButtonSecondary, DarkTypographyStyled, GrayLightTypographyStyled, MarkPrice } from '../styled/styledComponents';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { useDispatch } from 'react-redux';
import { selectedModal } from '../redux/actions/actionModal';
import { addSyncToCart } from '../redux/actions/actionShoppingCart';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  const enviarDatosModal = (item) => {
    dispatch(selectedModal(item));
    navigate('/detalle');
  }
  
  const addToCart = (productCart) => {
    dispatch(addSyncToCart(productCart));
  };

  return (
    <div className={classes.product}>
        <img className={classes.product__image} src={product.image__front} onClick={() => enviarDatosModal(product)}/>
        <div className={classes.product__content}>
          <div>
            <Typography className={classes.product__categoria}>{product.categoria}</Typography>
            <GrayLightTypographyStyled>Women Whey Protein</GrayLightTypographyStyled>
          </div>
            <ButtonSecondary onClick={() => addToCart(product)}>Agregar <ShoppingCart /></ButtonSecondary>
            <Typography className={classes.product__markPrice}>${product.precio}</Typography>

        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    product: {
      position: 'relative',
      width: '100%',
      height: '100%',
      boxShadow: '3px 5px 10px #bebebe,-5px -5px 10px #ffffff',
      backgroundColor: 'rgb(43,49,53)',
      background: 'linear-gradient(90deg, rgba(43,49,53,1) 0%, rgba(67,72,78,1) 44%, rgba(62,67,73,1) 57%, rgba(46,51,55,1) 100%)'
    },
    product__content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '.4rem',
      gap: theme.spacing(2)
    },
    product__image: {
        width: '100%',
        cursor: 'pointer',
        height: '280px',
        '&:hover' :{
          opacity: '.6',
        }
    },
    product__markPrice: {
      position: 'absolute',
      backgroundColor: '#000',
      color: '#FFF',
      padding: '.4rem .8rem',
      borderRadius: '0 0 0 14px',
      top: 0,
      right: 0,
  },
  product__categoria: {
    textTransform: 'uppercase',
    color: 'blue',
    fontWeight: '540'
  }
}))

export default Product