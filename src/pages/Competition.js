import { makeStyles } from "@material-ui/core";
import { Fade } from "react-reveal";
import Gallery from "../components/Gallery";

const Competition = () => {
  const classes = useStyles();

  return (
    <div className={classes.competition}>
      <img
        className={classes.competition__banner}
        src="https://cdn.pixabay.com/photo/2019/12/06/15/12/boxing-4677527_960_720.jpg"
        alt="atletismo"
      />
      <div className={classes.competition__container}>
        <div className={classes.competition__boxOne}>
          <h2 className={classes.detail__title}>
            <i>Competición</i>
          </h2>
          <p className={classes.detail__text}>
            Nervios, excitación, ansiedad, pérdida de apetito, estrés, insomnio…
            Como siempre que vamos a enfrentarnos a una situación importante
            para nosotros, los días previos a una competición es habitual
            sentirse alterado física y emocionalmente. Aparte de la agitación
            general que se experimenta, pueden influir otros factores como si es
            la primera vez que competimos o llevamos tiempo haciéndolo, la
            relevancia y el tipo de campeonato al que nos enfrentamos y el grado
            de responsabilidad que implica participar en él.
          </p>
          <p className={classes.detail__text}>
            El ejercicio físico mejora la función mental, la agilidad, la
            autonomía, la memoria, la imagen corporal y la sensación de
            bienestar gracias a la segregación de hormonas como la dopamina y
            las endorfinas. Pero estas hormonas son también estimulantes de
            nuestro sistema nervioso central, por lo que liberarlas lo mantendrá
            activo.
          </p>
          <p className={classes.detail__text}>
            Para rendir al máximo nivel es necesario que el cuerpo esté
            relajado, reposado y que haya recibido las horas de descanso básicas
            para responder durante la prueba.
          </p>

          <h2 className={classes.detail__title}>
            <i>¿Qué experimenta el cuerpo antes de competir?</i>
          </h2>
          <p className={classes.detail__text}>
            Se distinguen tres fases en este proceso, basándose en el principio
            de supercompensación:
          </p>
          <ol className={classes.competition__boxTwoList}>
            <li className={classes.competition__boxTwoLi}>
              Al aplicar una carga de entreno, aparecerá una primera fase de
              fatiga o catabolismo que hará que se consuman los sustratos
              energéticos y se disminuya el rendimiento.
            </li>
            <li className={classes.competition__boxTwoLi}>
              La segunda fase es la anabólica o de recuperación, en la que se
              produce la síntesis de proteínas o construcción.
            </li>
            <li className={classes.competition__boxTwoLi}>
              Finalmente, se pasa a la fase de supercompensación, en la que los
              niveles energéticos y hormonales han subido por encima de la curva
              normal fisiológica y encontramos nuestra mayor capacidad de
              rendimiento. La competición deberá producirse en ese mismo
              momento, por lo que debemos saber la magnitud de la carga en
              volumen e intensidad y aplicarla en el momento justo para que nos
              dé tiempo a recuperar, adaptarnos y mejorar el día clave.
            </li>
          </ol>
        </div>
        <div className={classes.competition__boxTwo}>
          <h2 className={classes.competition__titleSecondary}>
          
          </h2>
          <img
            className={classes.competition__boxTwoBanner}
            src="https://cdn.pixabay.com/photo/2019/11/25/11/56/boxing-4651834_960_720.jpg"
            alt="Article Banner"
          />
          <div className={classes.competition__boxTwoImages}>
            <img
              className={classes.competition__articleImage}
              src="https://cdn.pixabay.com/photo/2016/11/22/23/49/cyclists-1851269_960_720.jpg"
              alt="Article recommended"
            />
            <img
              className={classes.competition__articleImage}
              src="https://cdn.pixabay.com/photo/2016/11/18/22/10/man-1837119_960_720.jpg"
              alt="Article recommended"
            />
            <img
              className={classes.competition__articleImage}
              src="https://cdn.pixabay.com/photo/2017/08/07/23/50/climbing-2609319_960_720.jpg"
              alt="Article recommended"
            />
          </div>
        </div>
      </div>
      <div className={classes.galleryContainer__title}>
        <p className={classes.galleryContainer__titlePrincipal}>
          ¡Conoce lo mejor para Deportistas!
        </p>
        <div className={classes.galleryContainer__gallery}>
          <Fade left>
            <Gallery categoria="Competición" />
          </Fade>
        </div>
      </div>
      <div className={classes.galleryContainer__title}>
        <div className={classes.galleryContainer__gallery}>
          <p className={classes.galleryContainer__titlePrincipal}>
            Deportistas Elite
          </p>
          <Fade left>
            <Gallery categoria="Competición1" />
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default Competition;

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
    borderRadius:"8px"
  },
  competition__boxTwoBanner: {
    width: "100%",
    height: "300px",
    marginBottom: theme.spacing(1),
    borderRadius:"8px"
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
