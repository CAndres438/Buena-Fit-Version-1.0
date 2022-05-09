import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  makeStyles,
  Select,
  MenuItem,
  Modal,
  Box,
  InputLabel,
} from "@material-ui/core";
import React, { useState } from "react";

const BuonaTest = () => {
  const classes = useStyles();
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [tmb, setTmb] = useState(0);
  const [edad, setEdad] = useState(0);
  const [objetivo, setObjetivo] = useState();
  const [sexo, setSexo] = useState();
  const [actividad, setActividad] = useState();
  const [logro, setLogro] = useState(0);
  const [imc, setImc] = useState(0);

  /******Eventos para Modal de simulación de Compra*/
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const calculateTmb = () => {
    const alturaM = altura / 100;

    const TMB = Math.round(
      (10 * peso + 6.25 * altura - 5 * edad + sexo) * actividad
    );
    const L = Math.round(TMB * objetivo);

    if (isNaN(TMB) || isNaN(L)) {
      setOpen(true);
    } else if (TMB < 600) {
      setOpen(true);
    } else {
      setTmb(TMB);
      setLogro(L);
      setImc((peso / (alturaM * alturaM)).toFixed(2));
      setOpen1(true);
    }
  };

  function verifyImc() {
    if (imc < 18.5) {
      return "Bajo Peso, se recomienda una fase de aumento.";
    } else if (imc < 24.9) {
      return "Peso Normal, se recomienda incrementar o recompone.r";
    } else if (imc < 29.9) {
      return "Un poco por encima, se recomienda recomponer.";
    } else if (imc < 34.9) {
      return "Obesidad Grado 1, se recomienda disminuir.";
    } else if (imc < 39.9) {
      return "Obesidad Grado 2, se recomienda disminuir.";
    }
  }

  function verifyObj() {
    if (objetivo === 1.2) {
      return `Para incrementar el peso, debes tener en cuenta que el objetivo es la ganancia de masa muscular,
      por lo que se deben valorar diferentes campos. Para tu peso de ${peso}Kg, son recomendables de ${
        peso * 2.2
      }
      a ${peso * 2.6} gramos de proteína. Puedes manejar un rango de ${
        peso * 0.8
      } a ${peso} gramos grasa al día. Como
      fundamento global tomaremos estrictamente el rango máximo ${
        peso * 2.6
      } gramos de proteína y ${peso} gramos de 
      grasa, con esto bajo el principio de calorías que encuentras en nuestra ventana 'Como Interpretar los datos',
      ya llevas ${peso * 2.6 * 4 + peso * 9} calorías, es decir faltan ${
        logro - (peso * 2.6 * 4 + peso * 9)
      } calorías
      equivalentes a ${
        (logro - (peso * 2.6 * 4 + peso * 9)) / 4
      } gramos de carbohidratos.`;
    } else if (objetivo === 0.8) {
      return `Para disminuir el peso, debes tener en cuenta que el objetivo es la protección de masa muscular,
      por lo que se deben valorar diferentes campos. Para tu peso de ${peso}Kg, son recomendables de ${
        peso * 2.8
      }
      a ${peso * 3} gramos de proteína. Puedes manejar un rango de ${
        peso * 0.8
      } a ${peso} gramos grasa al día. Como
      fundamento global tomaremos estrictamente el rango mínimo ${
        peso * 2.8
      } gramos de proteína y ${peso * 0.8} gramos de 
      grasa, con esto bajo el principio de calorías que encuentras en nuestra ventana 'Como Interpretar los datos',
      ya llevas ${peso * 2.8 * 4 + peso * 0.8 * 9} calorías, es decir faltan ${
        logro - (peso * 2.8 * 4 + peso * 0.8 * 9)
      } calorías 
      equivalentes a ${
        (logro - (peso * 2.8 * 4 + peso * 0.8 * 9)) / 4
      } gramos de carbohidratos.`;
    } else if (objetivo === 1) {
      return `Para mantener el peso, debes tener en cuenta que el objetivo es la recomposición corporal de masa muscular,
      por lo que se deben valorar diferentes campos. Para tu peso de ${peso}Kg, son recomendables de ${
        peso * 2.0
      }
      a ${peso * 2.2} gramos de proteína. Puedes manejar un rango de ${
        peso * 0.8
      } a ${peso} gramos grasa al día. Como
      fundamento global tomaremos estrictamente el rango máximo ${
        peso * 2.2
      } gramos de proteína y ${peso} gramos de 
      grasa, con esto bajo el principio de calorías que encuentras en nuestra ventana 'Como Interpretar los datos',
      ya llevas ${peso * 2.2 * 4 + peso * 1 * 9} calorías, es decir faltan ${
        logro - (peso * 2.2 * 4 + peso * 1 * 9)
      } calorías 
      equivalentes a ${
        (logro - (peso * 2.2 * 4 + peso * 1 * 9)) / 4
      } gramos de carbohidratos.`;
    }
  }

  return (
    <div className={classes.calculator}>
      <Container maxWidth="sm">
        <h1 variant="h3">Buona Test</h1>
        <br />

        <Grid container direction="column" spacing={2}>
          <Grid item>
            <img
              className={classes.img}
              src="https://c.tenor.com/TtgwsC5XcmcAAAAC/fellfreude-barf.gif"
              alt="imagen logo"
            />
          </Grid>

          <Grid item>
            <TextField
              label="Altura en cm"
              variant="filled"
              fullWidth
              type="number"
              value={altura}
              onChange={({ target }) => setAltura(target.value)}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Peso en Kg"
              variant="filled"
              fullWidth
              type="number"
              value={peso}
              onChange={({ target }) => setPeso(target.value)}
            />
          </Grid>

          <Grid item>
            <InputLabel
              variant="filled"
              style={{ width: "0%", fontSize: "12px" }}
              id="obj-label"
            >
              Objetivo
            </InputLabel>
            <Select
              label="Objetivo"
              labelId="obj-label"
              variant="filled"
              fullWidth
              type="text"
              value={objetivo}
              onChange={({ target }) => setObjetivo(target.value)}
            >
              <MenuItem value={1.2}>Aumentar Peso</MenuItem>
              <MenuItem value={0.8}>Reducción de Peso</MenuItem>
              <MenuItem value={1}>Mantener Peso</MenuItem>
            </Select>
          </Grid>

          <Grid item>
            <InputLabel
              variant="filled"
              style={{ width: "0%", fontSize: "12px" }}
              id="sex-label"
            >
              Sexo
            </InputLabel>
            <Select
              label="Sexo"
              labelId="sex-label"
              variant="filled"
              fullWidth
              type="text"
              value={sexo}
              onChange={({ target }) => setSexo(target.value)}
            >
              <MenuItem value={+5}>Masculino</MenuItem>
              <MenuItem value={-161}>Femenino</MenuItem>
            </Select>
          </Grid>

          <Grid item>
            <TextField
              label="Edad"
              variant="filled"
              fullWidth
              type="number"
              value={edad}
              onChange={({ target }) => setEdad(target.value)}
            />
          </Grid>

          <Grid item>
            <InputLabel
              variant="filled"
              style={{ width: "0%", fontSize: "12px" }}
              id="act-label"
            >
              Actividad
            </InputLabel>
            <Select
              label="Actividad"
              labelId="act-label"
              variant="filled"
              fullWidth
              type="text"
              value={actividad}
              onChange={({ target }) => setActividad(target.value)}
            >
              <MenuItem value={1.2}>Poco o ningún ejercicio</MenuItem>
              <MenuItem value={1.375}>De 1 a 3 días a la semana</MenuItem>
              <MenuItem value={1.55}>De 3 a 5 días a la semana</MenuItem>
              <MenuItem value={1.725}>De 6 a 7 días a la semana</MenuItem>
              <MenuItem value={1.9}>
                Dos veces al día, entrenamientos muy duros
              </MenuItem>
            </Select>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => calculateTmb()}
            >
              Calcular
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => handleOpen()}
            >
              Como Interpretar los datos
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            No has ingresado algunos Buona Datos
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ve e ingresa esos datos, para ponernos en forma juntos 🖤
            <br />
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>Tus Buona Resultados:</b>
            <br />
          </Typography>
          <p>
            <b>TMB:</b> {tmb} Calorías diarias
          </p>
          <p>
            <b>Calorías para cumplir el objetivo:</b> {logro} Calorías diarias
          </p>
          <p>
            <b>Índice de Masa Corporal:</b> {imc}
          </p>
          <br />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h4 style={{ color: "orange" }}>{verifyImc()}</h4>
            <p>
              Recuerda que esta dieta se basa en el déficit y superávit del 20%.
            </p>
            <br />
          </Typography>
          <Typography>
            <h4>Cumpliendo el objetivo:</h4>
            <p style={{ textAlign: "justify" }}>{verifyObj()}</p>
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4>¿Que significa cada dato suministrado por el Buona Test? 🖤</h4>
          <br />

          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{ textAlign: "justify" }}
          >
            <p>
              <b>IMC: </b>Índice de masa corporal, o método de rangos por talla
              y peso.
            </p>
            <p>
              <b>TMB: </b>Tasa metabólica basal, es la tasa de gasto energético
              (calorías).
            </p>
            <p>
              <b>Calorías: </b>Unidad representativa para el gasto de energía.
            </p>
            <p>
              <b>Calorías Objetivo: </b>Calorías de TMB en base al gasto
              asociado, múltiplicado por la tasa objetivo.
            </p>
            <p>
              <b>Calorías por gramo de grasa: </b>9 Cal.
            </p>
            <p>
              <b>Calorías por gramo de carbohidrato: </b>4 Cal.
            </p>
            <p>
              <b>Calorías por gramo de proteína: </b>4 Cal.
            </p>
            <p>
              <b>Déficit: </b>Reducción de calorías, en esta calculadora
              correspondiente al 20%, se recomienda en algunas personas un 10%.
            </p>
            <p>
              <b>Superávit: </b>Aumento de calorías, en esta calculadora
              correspondiente al 20%, se recomienda en algunas personas un 10%.
            </p>
            <p>
              <b>Recomponer:</b>Mantener las calorías de la TMB pero
              distribuidas de mejor forma, para usar la grasa en construcción de
              músculo.
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
const style = {
  position: "absolute",
  top: "56%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "white",
  border: "2px solid #000",
  borderRadius: "15px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const useStyles = makeStyles((theme) => ({
  calculator: {
    background: "white",
    paddingTop: "10px",
    marginLeft: "0px",
    marginRight: "0%",
    paddingBottom: "60px",
    textAlign: "center",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "80px",
  },
  calculator__result: {},

  calculator__return: {
    color: "#333",
    fontSize: "1rem",
    textAlign: "justify",
    // marginRight: '600px',
  },
}));

export default BuonaTest;
