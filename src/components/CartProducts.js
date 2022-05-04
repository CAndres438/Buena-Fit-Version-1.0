import React from "react";
import { useDispatch } from "react-redux";
import { deleteSyncFromCart } from "../redux/actions/actionShoppingCart";
import { ButtonPrincipal,MarkPrice1,} from "../styled/styledComponents";

//Material UI
import { makeStyles } from "@material-ui/core";
import { formatoCOP } from "../utils/Moneda";

const CartProducts = ({ id, image, nombre, precio }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(deleteSyncFromCart(id));
  };

  return (
    <div className={classes.checkoutProduct}>
      <img
        className={classes.checkoutProduct__image}
        src={image}
        alt="Checkout Product"
      />

      <div className={classes.checkoutProduct__info}>
        <p className={classes.checkoutProduct__title}>{nombre}</p>
        <p className={classes.checkoutProduct__price}>
          <MarkPrice1>{formatoCOP.format(precio)}</MarkPrice1>
        </p>
        <div>
        <ButtonPrincipal onClick={removeFromCart}>Remove</ButtonPrincipal>

        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  checkoutProduct: {
    width: '100%',
    
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #5C5C5C',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    paddinBottom: '500px'
  },
  checkoutProduct__info: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: theme.spacing(3),
    width: '50%',
    color: "white"
  },
  checkoutProduct__image: {
    objectFit: "contain",
    width: "140px",
    height: "140px",
    background: "white",
    borderRadius: "10px"
  },
  checkoutProduct__title: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '17px',
    fontWeight: '700',
    height: '100%',
    gap: theme.spacing(2)
  },
  checkoutProduct__price: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(4)
  },
}));

export default CartProducts;
