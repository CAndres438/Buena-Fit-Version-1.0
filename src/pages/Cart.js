import React, { useEffect, useState } from "react";

//Material UI
import { makeStyles } from "@material-ui/core";
import { getAuth } from "firebase/auth";
import Subtotal from "../components/Subtotal";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartProducts from "../components/CartProducts";
import {
  ButtonPrincipal,
  DarkTypographyStyled,
  GrayLightTypographyStyled,
  GrayTitleStyled,
  GrayTitleStyled1,
} from "../styled/styledComponents";
import { getCartTotal } from "../selectors/getCartTotal";
import { formatoCOP } from "../utils/Moneda";

const Checkout = () => {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const { cart } = useSelector((store) => store.cart);

  useEffect(() => {
    const auth = getAuth().currentUser;
    setUser(auth);
  }, []);

  return (
    <div className={classes.cart}>
      <div className={classes.cart__container}>
        <div className={classes.cart__containerTitle}>
          <GrayTitleStyled>CARRITO DE COMPRA</GrayTitleStyled>
          <ShoppingCartIcon />
        </div>
        <div className={classes.cart__container}>
          <div className={classes.cart__containerLabels}>
           
          </div>

          {cart.map((item, index) => (
            <CartProducts
              key={index}
              id={item.codigo}
              nombre={item.nombre}
              image={item.image__front}
              precio={item.precio}
            />
          ))}
        </div>
        <div className={classes.cart__containerTitle}>
          <GrayTitleStyled1>Subtotal: {formatoCOP.format(getCartTotal(cart))} </GrayTitleStyled1>
          <GrayLightTypographyStyled>
            Los códigos de descuento, los costes de envío y los impuestos se
            añaden durante el pago.
          </GrayLightTypographyStyled>
        </div>
        <div className={classes.form__orderFlex}>
          <div className={classes.cart__containerForm}>
            <DarkTypographyStyled>
              Indicaciones para el vendedor
            </DarkTypographyStyled>
            <form className={classes.cart__form}>
              <textarea
                className={classes.cart__formTextarea}
                name="support"
              ></textarea>
              <div className={classes.cart__formContainerCheckbox}>
                <input type="checkbox" name="supportCheck" />
                <label>Estoy de acuerdo con los términos y condiciones.</label>
              </div>
              <ButtonPrincipal>Finalizar Pedido</ButtonPrincipal>
            </form>
          </div>
          <div className={classes.cart__order}>
            <Subtotal />
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  cart: {
    width: "100%",
    minHeight: "60vh",
    margin: "4rem 0",
  },
  cart__container: {
    width: "94%",
    margin: "0 auto",
  },
  cart__containerTitle: {
    paddingBottom: "4rem",
    textAlign: "center",
    color: "white"
  },
  cart__containerLabels: {
    width: "100%",
    borderBottom: "2px solid #5C5C5C",
    display: "flex",
    justifyContent: "space-between",
  },
  form__orderFlex: {
    display: "flex",
    justifyContent: "space-between",
    gap: theme.spacing(20),
  },
  cart__containerForm: {
    width: "100%",
  },
  cart__form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
  },
  cart__formTextarea: {
    width: "100%",
    border: "none",
    outline: "none",
    borderRadius: "10px",
    borderBottom: "2px solid #333",
    resize: "vertical",
    minHeight: "60px",
    maxHeight: "200px",
  },
  cart__formContainerCheckbox: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    color: "white",
  },
  cart__order: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    border: "2px solid #EFEFEF",
    gap: theme.spacing(2),
  },
  cart__orderBox: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default Checkout;
