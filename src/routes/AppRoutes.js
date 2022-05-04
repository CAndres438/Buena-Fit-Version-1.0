import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import PublicRouters from "./PublicRoutes";

const AppRoutes = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAdmin, setUserAdmin] = useState(null);

  // const { usuarios } = useSelector(store => store.usuarios);

  async function getRol(uid) {
    const docuRef = doc(db, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().role;
    
    return infoFinal
  }

  async function setUserWithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((role) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        role: role
      };
      setUserAdmin(userData);
      console.log("user Data admin", userData);
    });
  }

  const auth = getAuth();

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      // Funcion Final
      if (!userAdmin) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUserAdmin(null);
    }
  });
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // dispatch(searchAsync(user.email))
      if (user?.uid) {
        setIsLoggedIn(true);
        console.log('usuario app routes');
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [setIsLoggedIn, setChecking]);

  if (checking) {
    return (
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgb(238,127,55)",
          background: "black",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            width="200px"
            height="100px"
            src="https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_960_720.jpg"
            alt="Loader"
          />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes isAuth={isLoggedIn}>
              <Login />
            </PublicRoutes>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRouters isAuth={isLoggedIn}>
              <Register />
            </PublicRouters>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoutes isAuth={isLoggedIn}>
              <DashboardRoutes userAdmin={userAdmin} />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
