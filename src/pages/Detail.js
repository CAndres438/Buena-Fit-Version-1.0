import React, { useEffect, useState } from "react";
import {
  DarkTypographyStyled,
  GrayTitleStyled,
  MarkPrice,
} from "../styled/styledComponents";

//Material UI
import { makeStyles, Typography } from "@material-ui/core";
import DetailsContainer from "../containers/DetailsContainer";
import Gallery from "../components/Gallery";
import Fade from "react-reveal/Fade";
import CommentsContainer from "../containers/CommentsContainer";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Detail = () => {
  const classes = useStyles();

  const { modal } = useSelector((store) => store.modal);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (modal) {
      setProduct(modal);
    }
  }, [modal]);

  return (
    <div id="hola" className={classes.detail}>
      {/* <img className={classes.detail__banner} src='./principals-home/principal-2.jpg'/> */}
      <DetailsContainer product={product} />
      <div className={classes.detail__container}>
        <div className={classes.detail__boxTitle}>
          <Typography className={classes.detail__title}>
            <i>DETALLES</i>
          </Typography>
          <Typography>{product.detalles}</Typography>
        </div>
        <div
          className={classes.detail__boxTitle}
          style={{
            borderTop: "3px solid #5C5C5C",
            borderBottom: "3px solid #5C5C5C",
          }}
        >
          <Typography className={classes.detail__title}>
            <i>INGREDIENTES</i>
          </Typography>
          <Typography>{product.ingredientes}</Typography>
        </div>
        <div className={classes.detail__boxTitle}>
          <Typography className={classes.detail__title}>
            <i>INSTRUCCIONES DE USO</i>
          </Typography>
          <Typography>{product.instrucciones}</Typography>
        </div>
        <div className={classes.detail__boxWarning}>
          <MarkPrice>Warning</MarkPrice>
          <DarkTypographyStyled>{product.warnings}</DarkTypographyStyled>
        </div>
        <div className={classes.galleryContainer__title}>
          <GrayTitleStyled>OTROS PRODUCTOS</GrayTitleStyled>
          <DarkTypographyStyled>¡OBTEN RESULTADOS!</DarkTypographyStyled>
          <Link to="/detalle">
            <div className={classes.galleryContainer__gallery}>
              <Fade right>
                <Gallery categoria="Definición" />
              </Fade>
            </div>
          </Link>
        </div>

        {/* Comments */}
        <CommentsContainer product={product} />
        {/* Comments */}
      </div>
      <Footer />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  detail: {
    width: "100%",
    height: "100vh",

    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  detail__container: {
    width: "94%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
  detail__banner: {
    width: "100%",
  },
  detail__boxTitle: {
    width: "100%",
    textAlign: "left",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  detail__title: {
    fontSize: "2.4rem",
    color: "#5C5C5C",
    fontWeight: "bold",
  },
  detail__boxWarning: {
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  galleryContainer__gallery: {
    marginTop: theme.spacing(2),
  },
  galleryContainer__title: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
}));

export default Detail;
