import React from "react";

//Material UI
import { makeStyles, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PaymentIcon from "@material-ui/icons/Payment";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import EuroIcon from "@material-ui/icons/Euro";
import { Link } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__top}>
          <div className={classes.footer__socialIcons}>
            <a className={classes.footer__iconMedia} href="https://www.facebook.com/">
              <FacebookIcon />
            </a>
            <a className={classes.footer__iconMedia} href="https://twitter.com/?lang=es">
              <TwitterIcon />
            </a>
            <a className={classes.footer__iconMedia} href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
          </div>
          <h2 className={classes.footer__logo}>BUONA FIT</h2>
          <div className={classes.footer__socialIcons}>
            <a className={classes.footer__iconPayment} href="https://colombia.payu.com/">
              <PaymentIcon />
            </a>
            <a className={classes.footer__iconPayment} href="https://www.dolar-colombia.com/">
              <MonetizationOnIcon />
            </a>
            <a className={classes.footer__iconPayment} href="https://www.portafolio.co/internacional/euro-cae-a-su-nivel-mas-bajo-en-cinco-anos-564632">
              <EuroIcon />
            </a>
          </div>
        </div>
        <div className={classes.footer__bottom}>
          <div className={classes.footer__links}>
            <Link className={classes.footer__link} to='/Blog'>
              Nuestro Blog
            </Link>
            <Link className={classes.footer__link} to='/Productos'>
              Productos
            </Link>
            <Link className={classes.footer__link} to='/Estudios'>
              Estudios
            </Link>
            <Link className={classes.footer__link} to='/Trending'>
              Trending Fisics
            </Link>
            <Link className={classes.footer__link} to='/AcercaDe'>
              Acerca de Nosotros
            </Link>
          </div>
          <Typography variant="body2" className={classes.footer_copywrite}>
            Buona Fit Derechos Reservados
          </Typography>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "auto",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "4rem 0",
    color: "#FFF",
    borderColor: "white",
    borderTop: "1px solid",
    marginTop: "2rem",
  },
  footer__container: {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  footer__top: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: " space-between",
    alignItems: "center",
  },
  footer__socialIcons: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(4),
  },
  footer__iconMedia: {
    color: "#FFF",
    textDecoration: "none",
  },
  footer__logo: {
    letterSpacing: "3px",
  },
  footer__iconPayment: {
    color: "#FFF",
    textDecoration: "none",
  },
  footer__links: {
    display: "flex",
    gap: theme.spacing(4),
    margin: "2rem 0",
    marginTop: theme.spacing(8),
  },
  footer__link: {
    color: "#FFF",
    fontSize: "1rem",
    textDecoration: "none",
  },
  footer__bottom: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  footer_copywrite: {
    color: "#CCC",
    textAlign: "center",
  },
}));

export default Footer;
