import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "../components/Markers";
import Countdown from "../components/Countdown";

// Material UI
import { makeStyles, Typography } from "@material-ui/core";
import {
  ButtonSecondary,
  GrayLightTypographyStyled1,
  GrayTitleStyled,
} from "../styled/styledComponents";

const MapView = () => {
  const classes = useStyles();

  let date = new Date();
  let general =
    String(date.getDate()).padStart(2, "0") +
    " - " +
    String(date.getMonth() + 1).padStart(2, "0") +
    " - " +
    date.getFullYear();

  const [state] = useState({
    currentLocation: { lat: "52.52437", lng: "13.41053" },
    zoom: 13,
  });

  useEffect(() => {}, []);

  return (
    <div className={classes.mapView}>
      <div className={classes.mapView__container}>
        <div className={classes.mapView__sidebar}>
          <div className={classes.mapView__sidebarHour}>
            <GrayLightTypographyStyled1>
              <h2>{general}</h2>
            </GrayLightTypographyStyled1>
            <Typography className={classes.mapView__sidebarHourClock}>
              {<Countdown />}
            </Typography>
            <img
              className={classes.mapView__sidebarImage}
              src="https://images.vexels.com/media/users/3/127818/isolated/preview/ef0a89e9b26123b15f64f82712eec701-camion-de-envio-brillante.png"
              alt="Car Delivery"
            />
          </div>
          <div className={classes.mapView__sidebarContent}>
            <GrayTitleStyled>Domicilio</GrayTitleStyled>
            <input
              className={classes.mapView__sidebarInput}
              type="text"
              placeholder="Ingresa tu dirección"
            />
            <ButtonSecondary>Enviar mi dirección</ButtonSecondary>
          </div>
        </div>
        <MapContainer
          style={{ width: "100vw", height: "100vh" }}
          center={state.currentLocation}
          zoom={state.zoom}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Markers />
        </MapContainer>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  mapView: {
    width: "auto",
    height: "80vh",
    marginLeft: "50px",
    marginRight: "50px",
    overflow: "hidden",
    margin: "4rem 0",
    borderRadius: "10px",
    borderColor: "white",
    border: "3px solid",
  },
  mapView__container: {
    display: "flex",
  },
  mapView__sidebar: {
    width: "50%",
    padding: theme.spacing(2),
    backgroundColor: "rgb(19,19,21)",
    background:
      "linear-gradient(90deg, rgba(19,19,21,1) 0%, rgba(29,29,30,1) 48%, rgba(30,30,31,1) 48%, rgba(49,50,55,1) 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  },
  mapView__sidebarContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: theme.spacing(2),
  },
  mapView__sidebarInput: {
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    borderBottom: "2px solid #5C5C5C",
    padding: ".6rem 0",
    color: "#F4F4F4",
  },

  mapView__sidebarHourClock: {
    fontSize: "1.6rem",
    letterSpacing: "1px",
    color: "#F4F4F4",
    textAlign: "center",
  },
  mapView__sidebarImage: {
    width: "100%",
    objectFit: "contain",
    height: "100px",
  },
}));

export default MapView;
