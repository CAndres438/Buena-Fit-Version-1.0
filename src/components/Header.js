import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//Material UI
import { makeStyles, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { logoutAsync } from "../redux/actions/actionLogin";
import Navbar from "./Navbar";
import MenuIcon from "@material-ui/icons/Menu";
import Navbar2 from "./Navbar2";

const Header = () => {
  const classes = useStyles();

  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(true);

  const { cart } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const n = localStorage.getItem("llave");

  useEffect(() => {
    const auth = getAuth().currentUser;
    setUser(auth);
  }, []);

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.header__container}>
          <Typography className={classes.header__title} variant="h3">
            BUONA FIT
          </Typography>
          <div
            className={
              showMenu ? classes.header__menuFalse : classes.header__menu
            }
          >
            <div className={classes.header__links}>
              <Link className={classes.header__link} to="/">
                INICIO
              </Link>
              <Link className={classes.header__link} to="/products">
                PRODUCTOS
              </Link>
              <Link className={classes.header__link} to="/detalle">
                DETALLE
              </Link>
            </div>
          </div>
          <div className={classes.header__socialIcons}>
            {/* /login */}
            <Link className={classes.header__link} to="/login">
              <div onClick={handleLogout} className={classes.header__option}>
                <span className={classes.header__optionLineOne}>
                  Hola,{" "}
                  {!user
                    ? "Guest"
                    : !user.displayName
                    ? user.email
                    : user.displayName}
                </span>

                {user ? "Cerrar Sesión" : "Inicio de Sesión"}
                <PersonIcon />
              </div>
            </Link>
            <Link className={classes.header__link} to="/cart">
              <ShoppingCartIcon />
              <span>{cart.length}</span>
            </Link>
            <MenuIcon
              className={classes.menuIcon}
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
        </div>
      </div>
      {n.length === 7 ? <Navbar /> : <Navbar2 />}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    top: "0",
    left: "0",
    position: "sticky",
    zIndex: "1000000000000",
  },
  header__title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  header: {
    width: "100%",
    zIndex: "1000000000000",
    padding: "1rem 0",
    backgroundColor: "#FFF",
    position: "relative",

    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      bottom: "0",
    },
  },
  header__container: {
    width: "94%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header__menu: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      padding: theme.spacing(2.5),
      position: "absolute",
      top: "-300%",
      left: "0",
      right: "0",
      backgroundColor: "white",
      transition: "all .3s ease-in-out",
    },
  },
  header__menuFalse: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      padding: theme.spacing(2.5),
      position: "absolute",
      top: "100%",
      left: "0",
      right: "0",
      backgroundColor: "white",
      transition: "all .3s ease-in-out",
    },
  },
  header__links: {
    display: "flex",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  header__socialIcons: {
    display: "flex",
    gap: theme.spacing(2),
  },
  header__link: {
    color: "#000",
    textDecoration: "none",
    zIndex: "100000",
    "&:hover": {
      color: "#5C5C5C",
    },
  },
  header__option: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  header__optionLineOne: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  menuIcon: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      cursor: "pointer",
      marginLeft: theme.spacing(1),
    },
  },
}));

export default Header;
