import React, { useEffect, useState } from "react";

// Material UI
import { makeStyles, Typography } from "@material-ui/core";
import {
  ButtonPrincipal,
  GrayLightTypographyStyled,
} from "../styled/styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { addSyncToCart } from "../redux/actions/actionShoppingCart";
import ReactImageMagnify from "react-image-magnify";
import { formatoCOP } from "../utils/Moneda";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

const initialState = {
  nombre: 'jose',
  codigo: 'normal',
  precio: 20000,
  image__front: 'https://funat.co/wp-content/uploads/2021/07/MONTAJE-22AA.jpg',
  image__lateral: 'https://funat.co/wp-content/uploads/2021/07/MONTAJE-22AA.jpg',
  image__back: 'https://funat.co/wp-content/uploads/2021/07/MONTAJE-22AA.jpg',
}

const DetailsContainer = ({product = initialState}) => {
  const classes = useStyles();

  const { modal } = useSelector((store) => store.modal);

  const dispatch = useDispatch();
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(modal.image__front);
  }, [modal]);

  const addToCart = (productCart) => {
    dispatch(addSyncToCart(productCart));
  };

  return (
    <div className={classes.details}>
      <div className={classes.details__options}>
      <img onMouseEnter={() => setImage(product.image__front)} className={classes.details__optionImage} src={product.image__front} alt='front'/>
      <img onMouseEnter={() => setImage(product.image__lateral)} className={product.image__lateral?classes.details__optionImage : classes.displayNone} src={product.image__lateral? product.image__lateral : product.image__front} alt='lateral'/>
      <img onMouseEnter={() => setImage(product.image__back)} className={product.image__lateral?classes.details__optionImage : classes.displayNone} src={product.image_back? product.image__back: product.image__front} alt='back'/>
      </div>
      {/* Card Detail */}
      <div className={classes.details__detail2}>
        <div className={classes.details__detail}>
          <ReactImageMagnify
            className={classes.details__detailImage}
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: image,
              },
              largeImage: {
                src: image,
                width: 800,
                height: 1200,
                borderRadius: '50px'
              },
            }}
          />
        </div>
      </div>
      {/* Card Detail */}

      {/* Card Info */}

      <div className={classes.card__info}>
        <div>
          <Typography className={classes.card__title}>{modal.nombre}</Typography>
          {/* <h3>{modal.nombre}</h3> */}
        </div>
        <GrayLightTypographyStyled
          variant="body2"
          component="h2"
          className={classes.flexText}
        >
          {/* <MarkPrice>${modal.precio}</MarkPrice> */}
          <p>
            <b>Envio Gratis.</b>
          </p>
          <Typography className={classes.clickInfoDetails}>Detalles</Typography>
        </GrayLightTypographyStyled>
        <div className={classes.details__boxInfo}>
          <Typography className={classes.details__price}>Precio</Typography>
          <Typography className={classes.details__price}>{formatoCOP.format(modal.precio)}</Typography>
        </div>
        {/*  */}
        <div className={classes.details__containerInfoFlex}>
          <div className={classes.details__boxInfoFlex}>
            <Typography className={classes.details__infoLabel}>
              Categoría 
            </Typography>
            <Typography className={classes.details__infoText}>
              {modal.categoria}
            </Typography>
          </div>
          <div className={classes.details__boxInfoFlex}>
            <Typography className={classes.details__infoLabel}>
              Sabor
            </Typography>
            <Typography className={classes.details__infoText}>
              {modal.sabor}
            </Typography>
          </div>
          <div className={classes.details__boxInfoFlex}>
            <Typography className={classes.details__infoLabel}>
              Contenido
            </Typography>
            <Typography className={classes.details__infoText}>{modal.gramos}</Typography>
          </div>
        </div>
        {/*  */}
        <div className={classes.details__payment}>
          <ButtonPrincipal onClick={() => addToCart(modal)}>
            Agregar al Carrito <ShoppingCart />
          </ButtonPrincipal>
          <ShoppingCart className={classes.button__rounded} />
        </div>
      </div>
      {/* Card Info */}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  details: {
    width: '98%',
    margin: '0 auto',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '60px 1.8fr 1.8fr',
    gap: theme.spacing(2),
    overflowY: 'hidden',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
        overflowY: 'visible',
        gap: theme.spacing(4),
    }
},
displayNone: {
    display: 'none'
},

flexText: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
},
details__options: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(.4),
    zIndex: 100,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'row'
    }
},
details__optionImage: {
    width: '60px',
    height: '60px',
    border: '1px solid #c4c4c4',
    borderRadius:'2px',
    cursor: 'pointer',
    objectFit: 'content',
},

details__detail: {
    width: '100%',
    maxHeight: '480px',
    [theme.breakpoints.down('sm')]: {
        maxHeight: '100%',
    }
},
details__detailImage: {
    width: '100%',
    maxHeight: '480px',
    objectFit: 'content',
    overflowY: 'visible',
    [theme.breakpoints.down('sm')]: {
        width: '50%',
        margin: '0 6rem',
        maxHeight: '100%',
    }
},

details__info: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    // height: '800px'
},

pay__info: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    border: '1px solid #CCC',
    height: '60%',
    // height: '100%',
    gap: theme.spacing(.8)
},
pay__infoButtons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(.4)
},
card__info: {
    width: '100%',
    display: 'flex',
    alignItems:'center',
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing(4),
},
card__title: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#111'
},
details__boxInfo: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid #5C5C5C',
    padding: '.6rem 1rem',
    borderRadius: '50px'
},
details__payment: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px solid #CCC',
    padding: theme.spacing(4)
},
details__containerInfoFlex: {
    width: '100%',
    display: 'flex'
},
details__boxInfoFlex: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
},
details__infoLabel: {
    fontSize: '1.2rem',
    color: '#333',
    fontWeight: '600'
},
details__infoText: {
    fontSize: '.9rem',
    color: '#888'
},
button__rounded: {
    width: '40px',
    height: '40px',
    padding: '4px',
    borderRadius: '50px',
    cursor: 'pointer',
    border: '2px solid'
},
clickInfoDetails: {
    cursor: 'pointer',
    color: 'blue',
},
displayNone: {
  display: 'none',
}
}));

export default DetailsContainer;
