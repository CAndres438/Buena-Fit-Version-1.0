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

const DetailsContainer = () => {
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
        <img onMouseEnter={() => setImage(modal.image__front)} className={classes.details__optionImage} src={modal.image__front}alt="front"/>
        <img onMouseEnter={() => setImage(modal.image__lateral)} className={classes.details__optionImage} src={modal.image__lateral} alt="lateral"/>
        <img onMouseEnter={() => setImage(modal.image__back)} className={classes.details__optionImage} src={modal.image__back} alt="back"/>
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
              Categoria 
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
              Aun no en bd
            </Typography>
          </div>
          <div className={classes.details__boxInfoFlex}>
            <Typography className={classes.details__infoLabel}>
              Gramos
            </Typography>
            <Typography className={classes.details__infoText}>Aun no en bd</Typography>
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
    width: "98%",
    margin: "0 auto",
    height: "600px",
    display: "grid",
    gridTemplateColumns: "60px 1.8fr 1.8fr",
    gap: theme.spacing(2),
    overflowY: "hidden",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  flexText: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  details__options: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.4),
    zIndex: 100,
  },
  details__optionImage: {
    width: "60px",
    height: "60px",
    borderRadius: "5px",
    border: "1px solid #c4c4c4",
    cursor: "pointer",
    objectFit: "content",
  },

  details__detail: {
    width: "100%",
    maxHeight: "480px",
    
  },

  details__detailImage: {
    width: "100%",
    maxHeight: "480px",
    objectFit: "content",
    overflowY: "visible",
   
  },

  details__info: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  pay__info: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
    border: "1px solid #CCC",
    height: "60%",
    gap: theme.spacing(0.8),
  },
  pay__infoButtons: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.4),
  },
  card__info: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    gap: theme.spacing(4),
  },
  card__title: {
    fontSize: "2rem",
    fontWeight: "600",
    color: 'white'
  },
  details__boxInfo: {
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid white",
    padding: ".6rem 1rem",
    borderRadius: "50px",
    color: 'white'
  },
  details__payment: {
    width: "80%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid #CCC",
    padding: theme.spacing(4),
  },
  details__containerInfoFlex: {
    width: "100%",
    display: "flex",
  },
  details__boxInfoFlex: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  details__infoLabel: {
    fontSize: "1.2rem",
    color: "blue",
    fontWeight: "600",
  },
  details__infoText: {
    fontSize: ".9rem",
    color: "white",
  },
  button__rounded: {
    width: "40px",
    height: "40px",
    padding: "4px",
    borderRadius: "50px",
    color: "white",
    cursor: "pointer",
    border: "2px solid",
  },

  clickInfoDetails: {
    cursor: "pointer",
    color: "blue",
  },
}));

export default DetailsContainer;
