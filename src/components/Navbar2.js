import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__container}>
        <div className={classes.header__links}>
          <div className={classes.header__frase}>Tu mejor versión</div>
          <Link className={classes.header__link} to="/buonaTest">
            BUONA TEST
          </Link>
          <Link className={classes.header__link} to="/training">
            ENTRENAMIENTOS
          </Link>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: "100%",
    padding: ".9rem 0",
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "#111",
    opacity: "0.8",
    position: "relative",
  },
  navbar__container: {
    width: "98%",
    margin: "0 auto",
    display: "flex",
    paddingRight: "2.2rem",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  header__link: {
    color: "#FFF",
    textDecoration: "none",
  },
  header__links: {
    display: "flex",
    gap: theme.spacing(2),
    zIndex: "100000",
  },
  header__search: {
    width: "100%",
    display: "flex",
    flex: ".4",
    alignItems: "center",
    borderRadius: "2px",
    zIndex: "3000000",
    height: "30px",
    backgroundColor: "#FFF",
    [theme.breakpoints.down("sm")]: {
      flex: ".8",
    },
  },
  header__searchInput: {
    height: "100%",
    padding: "10px",
    width: "100%",
    cursor: "pointer",
    border: "none",
    outline: "none",
    borderRadius: "2px",
  },
  header__frase: {
    color: "white",
  },
  header__searchIcon: {
    height: "22px !important",
    backgroundColor: "#FFF",
  },
}));

export default Navbar2;
