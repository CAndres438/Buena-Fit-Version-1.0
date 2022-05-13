import React from "react";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../selectors/getCartTotal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//Material UI
import { makeStyles } from "@material-ui/core";
import { ButtonPrincipal } from "../styled/styledComponents";

const Subtotal = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const { cart } = useSelector((store) => store.cart);

  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              ({cart.length} elementos): <strong>{value}</strong>
            </p>
            <small className={classes.subtotal__gift}>
              <input type="checkbox" />
              Buona Fit Regalo 🧡
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} // Calculate total cart
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <ButtonPrincipal onClick={(e) => navigate("/payment")}>
        Vamos a pagar
      </ButtonPrincipal>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  subtotal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "300px",
    height: "100px",
    padding: theme.spacing(2),
    backgroundColor: "white",
    border: "1px solid #dddd",
    borderRadius: "3px",
  },
}));

export default Subtotal;
