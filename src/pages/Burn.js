import { Fade } from "react-reveal";
import Gallery from "../components/Gallery";
import { makeStyles } from "@material-ui/core";

const Burn = () => {
  const classes = useStyles();

  return (
    <div className={classes.competition}>
      <img
        className={classes.competition__banner}
        src="https://cdn.pixabay.com/photo/2020/05/12/16/45/man-5163889_960_720.jpg"
        alt="banner"
      />
      <div className={classes.competition__container}>
        <div className={classes.competition__boxOne}>
          <h2 className={classes.detail__title}>
            <i>¿Qué es entrenamiento para definir?</i>
          </h2>
          <p className={classes.detail__text}>
            En cierto modo, se puede decir que no existe el entrenamiento para
            definir. Y es algo totalmente cierto. En este sentido, nuestra dieta
            es la que va a marcar la consecución de este objetivo
          </p>
          <p className={classes.detail__text}>
            Antes de empezar, es importante saber que la definición muscular se
            consigue gracias a una reducción del porcentaje de grasa, ya que
            esta está localizada entre la piel y el músculo. Por eso debemos
            reducir la capa de tejido adiposo que cubre los músculos para que la
            forma de estos puedan saltar a la vista cada vez que te quites la
            camiseta en la playa este verano.
          </p>
          <h2 className={classes.detail__title}>
            <i>
              ¿Cómo podemos reducir la capa de grasa que cubre nuestros
              músculos?
            </i>
          </h2>
          <p className={classes.detail__text}>
            Para reducir grasa, tal y como hemos comentado antes, será necesario
            combinar la parte nutricional junto al tipo de entrenamiento y
            respetar los descansos para evitar la fatiga extrema. Debes tener en
            cuenta que por muchos kilos que consigas levantar en cada sesión, si
            tu ingesta calórica no está controlada, no vas a conseguir definir
            músculo.
          </p>
          <p className={classes.detail__text}>Tips para empezar:</p>
          <ol className={classes.competition__boxTwoList}>
            <li className={classes.competition__boxTwoLi}>
              <b>
                El entrenamiento HIIT, tu mejor aliado: Este tipo de
                entrenamiento consiste en mezclar periodos cortos de tiempo de
                un entrenamiento muy intenso (en torno al 80% – 90% de nuestro
                ritmo cardíaco), con otros períodos a una intensidad moderada
                (60% – 70%). Es debido a la alta intensidad con la que se
                realizan los ejercicios que la pérdida de grasa sea mayor,
                además de ser más eficiente, puesto que las sesiones suelen ser
                más cortas.
              </b>
            </li>
            <li className={classes.competition__boxTwoLi}>
              <b>Controla lo que comes:</b> Sin duda el tipo de nutrición que
              lleves a cabo en todo este período será el detalle que marcará la
              diferencia. Si quieres definir tus músculos, lo que debes hacer es
              modificar los porcentajes de los macronutrientes principales
              (carbohidratos, proteínas y grasas) de la siguiente manera:
              <ul className={classes.competition__boxListInside}>
                <li className={classes.competition__boxTwoLi}>
                  <b>Reduce las calorías a partir de los carbohidratos</b>:
                  distribúyelos a lo largo del día, principalmente durante el
                  desayuno, la comida y después de entrenar
                </li>
                <li className={classes.competition__boxTwoLi}>
                  <b>Aumenta el consumo de proteínas:</b> La reducción de los
                  carbohidratos se verá compensada por el aumento de proteínas
                  para evitar la destrucción muscular. Sobre todo, consume
                  proteínas de calidad: carne magra, pescado azul o blanco,
                  marisco, huevos o esta lista de alimentos ricos en proteínas
                  vegetales.
                </li>
                <li className={classes.competition__boxTwoLi}>
                  <b>Consume grasas saludables:</b> Evita las grasas saturadas
                  presentes en la mantequilla, cremas, carnes grasosas, frituras
                  o gran mayoría de productos procesados, y opta por grasas
                  insaturadas que proporcionan alimentos como el aguacate,
                  salmón, atún, sardinas, frutos secos, aceitunas, semillas de
                  girasol o de calabaza.
                </li>
              </ul>
            </li>
            <li className={classes.competition__boxTwoLi}>
              <b>
                Descansa el tiempo suficiente entre cada sesión: Seguir una
                rutina de entrenamientos compensada con el descanso adecuado es
                otro de los factores a tener en cuenta para alcanzar tu
                objetivo. Debes considerar que, si has escogido el entrenamiento
                HIIT como método para definir tus músculos, este no está exento
                de desventajas. La principal es que, debido al sobre
                entrenamiento al que se expone nuestro cuerpo, el sistema
                nervioso central puede verse afectado y causar daño muscular,
                tensión mecánica o estrés metabólico.
              </b>
            </li>
            <p className={classes.competition__boxTwoLi}>
              Para evitar estas consecuencias,{" "}
              <b>
                debes tomar un mínimo de 48 horas de descanso entre cada sesión
                de trabajo de alta intensidad.
              </b>{" "}
              Ten en cuenta que en estos casos, prevalece la máxima de “menos es
              más”, así que con 2 o 3 entrenamientos semanales tendrías
              suficiente.
            </p>
          </ol>
        </div>
        <div className={classes.competition__boxTwo}>
          <h2 className={classes.competition__titleSecondary}>
          </h2>
          <img
            className={classes.competition__boxTwoBanner}
            src="https://cdn.pixabay.com/photo/2017/02/28/10/40/abs-2105416__340.jpg"
            alt="Article Banner"
          />
          <div className={classes.competition__boxTwoImages}>
            <img
              className={classes.competition__articleImage}
              src="https://cdn.pixabay.com/photo/2021/09/21/07/30/bodybuilder-6642675__340.jpg"
              alt="Article recommended"
            />
            <img
              className={classes.competition__articleImage}
              src="https://cdn.pixabay.com/photo/2016/01/18/05/04/abs-1146030__340.jpg"
              alt="Article recommended"
            />
            <img
              className={classes.competition__articleImage}
              src="https://cdn.pixabay.com/photo/2017/10/11/19/51/model-2842207__340.jpg"
              alt="Article recommended"
            />
          </div>
        </div>
      </div>
      <div className={classes.galleryContainer__title}>
        <p className={classes.galleryContainer__titlePrincipal}>
          ¡Conoce lo mejor para Quemar Grasa!
        </p>
        <div className={classes.galleryContainer__gallery}>
          <Fade left>
            <Gallery categoria="Definición" />
          </Fade>
        </div>
      </div>
      <div className={classes.galleryContainer__title}>
        <div className={classes.galleryContainer__gallery}>
          <p className={classes.galleryContainer__titlePrincipal}>
            Quema Activa y más Rápida
          </p>
          <Fade left>
            <Gallery categoria="Definición1" />
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Burn;

const useStyles = makeStyles((theme) => ({
  competition: {
    width: "100%",
  },
  competition__container: {
    width: "90%",
    margin: "4rem auto",
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: theme.spacing(8),
  },
  detail__title: {
    fontSize: "2.4rem",
    color: "#5C5C5C",
    fontWeight: "bold",
    textAlign: "center",
    margin: "2rem 0",
    textTransform: "uppercase",
  },
  detail__text: {
    fontSize: "1.2rem",
    color: "#333",
    fontWeight: "600",
    textAlign: "justify",
  },
  competition__banner: {
    width: "100%",
    height: "80vh",
  },
  competition__boxOne: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  // BoxTwo
  competition__boxTwoImages: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(1.4),
  },
  competition__articleImage: {
    width: "100%",
    height: "140px",
    borderRadius:'8px'
  },
  competition__boxTwoBanner: {
    width: "100%",
    height: "300px",
    marginBottom: theme.spacing(1),
    borderRadius:'8px'
  },
  competition__boxTwoList: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  competition__boxTwoLi: {
    fontSize: "1.3rem",
    color: "#333",
    fontWeight: "600",
    textAlign: "justify",
  },
  competition__boxListInside: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    marginLeft: "2.8rem",
    margin: "1rem 0",
  },
  galleryContainer__titlePrincipal: {
    color: "#5C5C5C",
    fontSize: "2.8rem",
    fontWeight: "750",
    fontStyle: "italic",
    marginBottom: ".6rem",
    marginTop: "2rem",
  },
  galleryContainer__title: {
    textAlign: "center",
  },
}));
