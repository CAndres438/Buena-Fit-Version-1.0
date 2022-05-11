import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useForm } from "../hooks/useForm";

import { registerAsync } from "../redux/actions/actionRegister";
//Material UI
import { makeStyles } from "@material-ui/core";
import {
  ButtonFacebook,
  ButtonGoogle,
  LinkRedirect,
} from "../styled/styledComponents";
import { loginFacebook, loginGoogle } from "../redux/actions/actionLogin";
import googleIcon from "../assets/google.png";
import facebookIcon from "../assets/facebook.png";

const Register = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
    name: "",
    role: "",
  });

  const { email, password, name, role } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAsync(email, password, name, role));
    reset();
    navigate("/");
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
    navigate("/");
  };

  const handleFacebook = () => {
    dispatch(loginFacebook());
    navigate("/");
  };

  return (
    <div className={classes.root}>
      <div className={classes.root__sidebar}>
        <img
          className={classes.root__sidebarImage}
          src="https://cdn.pixabay.com/photo/2018/04/04/16/44/kettlebell-3290296_960_720.jpg"
          alt="sidebar auth"
        />
      </div>

      <div className={classes.login__container}>
        <h1>Regístrate Gratis</h1>

        <form onSubmit={handleSubmit} className={classes.form}>
          <h5>Nombre</h5>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Ingresa tu Nombre"
            onChange={handleInputChange}
          />

          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Ingresa tu email"
            onChange={handleInputChange}
          />

          <h5>Rol</h5>
          <select value={role} name="role" onChange={handleInputChange}>
            <option value="usuario">Usuario</option>
            <option value="admin">Administrador</option>
          </select>

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Crea tu Contraseña"
            onChange={handleInputChange}
          />

          <button type="submit" className={classes.login__signUpButton}>
            Registro y Logueo
          </button>

          <ButtonGoogle type="button" onClick={handleGoogle}>
            <img
              width="20px"
              height="20px"
              src={googleIcon}
              alt="Google Icon"
            />
            SignUp with Google
          </ButtonGoogle>

          <ButtonFacebook type="button" onClick={handleFacebook}>
            <img
              width="20px"
              height="20px"
              src={facebookIcon}
              alt="Facebook Icon"
            />
            SignUp with Facebook
          </ButtonFacebook>
        </form>
        <h3>Buona Fit</h3>
        <LinkRedirect to="/login">Inicio de Sesión</LinkRedirect>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(0%,0%,0%)",
    height: "100vh",
    padding: theme.spacing(4),
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr",
  },
  root__sidebar: {
    width: "100%",
    height: "100%",
  },
  root__sidebarImage: {
    width: "100%",
    height: "auto",
  },
  login__logo: {
    marginTop: "20px",
    marginBottom: "20px",
    objectFit: "contain",
    width: "100px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  login__container: {
    width: "440px",
    height: "100%",
    color: "#FFF",
    backgroundColor: "rgb(19,19,21)",
    background:
      "linear-gradient(90deg, rgba(19,19,21,1) 0%, rgba(29,29,30,1) 48%, rgba(30,30,31,1) 48%, rgba(49,50,55,1) 100%)",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    marginLeft: "0px",
    marginRight: "10px",
    borderRadius: "5px",
    "& h1": {
      fontWeight: "500",
      marginBottom: "20px",
    },
    "& p": {
      marginTop: "15px",
      fontSize: "12px",
    },
  },

  form: {
    "& h5": {
      marginBottom: "5px",
    },
    "& input": {
      height: "40px",
      marginBottom: "10px",
      backgroundColor: "white",
      width: "100%",
      borderRadius: "5px",
      fontWeight: "600",
      paddingLeft: "5px",
    },
    "& select": {
      height: "40px",
      width: "100%",
      borderRadius: "5px",
      fontWeight: "600",
      paddingLeft: "5px",
    },
  },
  login__signUpButton: {
    background: "black",
    borderRadius: "5px",
    color: "white",
    width: "100%",
    height: "40px",
    border: "1px solid",
    marginTop: "10px",
    borderColor: "white",
    cursor: "pointer",
    "&:hover": {
      opacity: ".9",
    },
  },
}));

export default Register;
