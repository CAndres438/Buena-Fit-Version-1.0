import { Fade } from "react-reveal";
import Gallery from "../components/Gallery";
import { makeStyles } from "@material-ui/core";


const Gain = ()=>{
    const classes = useStyles();
    return(
    <div className={classes.competition}>
        <img className={classes.competition__banner} src="https://cdn.pixabay.com/photo/2021/01/03/03/43/man-5883500_960_720.jpg" alt="banner"/>
    <div className={classes.competition__container}>
        <div className={classes.competition__boxOne}>
        <h2 className={classes.detail__title}><i>¿CÓMO GANAR MASA MÚSCULAR?</i></h2>
        <p className={classes.detail__text}>Si estás buscando un método mágico para aumentar el volumen de tus músculos en un mes quizá este no sea tu artículo. Sobre todo porque lo primero que no queremos es poner en riesgo tu salud ni proponerte nada que pueda perjudicar a tu organismo. Pero si lo que esperas <b>es saber cómo incrementar el volumen de tus músculos y que los resultados no se esfumen en un santiamén</b>, estás en el lugar adecuado.</p>
        <p className={classes.detail__text}>Ten en cuenta que este no es un entrenamiento para pasar del sofá al gimnasio. Si eres sedentario, es mejor que empieces por otro tipo de entrenamiento más ligero antes de plantearte una rutina de aumento de masa muscular.</p>
        <p className={classes.detail__text}>Es importante que sepas que para lograr tu deseado incremento de masa muscular deberás combinar dos elementos inseparables: una <b>alimentación que favorezca la fabricación de músculo (hipertrofia),</b> donde las proteínas acaparen el protagonismo, y un entrenamiento en el que la regulación de la carga provoque <b>un incremento de fuerza máxima y del volumen muscular.</b></p>
        <p className={classes.detail__text}>Ahora que sabemos esto, sigamos con ...</p>

        <h2 className={classes.detail__title}><i>¿CÓMO GANAR MASA MUSCULAR DE MANERA SALUDABLE?</i></h2>
        <p className={classes.detail__text}>El entrenamiento funcional es ese tipo de ejercicio que te ayudará con todo: mejora tu coordinación, postura, te ayuda a mantener tu masa muscular, a mejorar tu rendimiento y resistencia, equilibrio, elasticidad y fuerza. Con este ejercicio trabajarás tu cuerpo de pies a cabeza sin esforzarte demasiado. Así mismo, lograrás mantenerte en buen estado físico.</p>
        <p className={classes.detail__text}>Tips para empezar:</p>
            <ol className={classes.competition__boxTwoList}>
                <li className={classes.competition__boxTwoLi}>LA ALIMENTACIÓN PARA AUMENTAR VOLUMEN MUSCULAR: La alimentación es un factor clave ya que será la encargada de aportar la materia prima para el engrosamiento de las fibras musculares.</li>
                <li className={classes.competition__boxTwoLi}>Suplementos proteícos para ganar masa muscular: Como casi todo en la vida, tomar proteína extra en la dieta no es bueno ni malo de por sí. Depende del uso que le demos. <b> Lo que no podemos hacer es cegarnos por el ansia de los resultados rápidos sin pensar en las consecuencias.</b></li>
                <li className={classes.competition__boxTwoLi}>Una rutina para aumentar masa muscular: A partir de aquí ya podemos empezar a trabajar. Lo más recomendable es <b>trabajar dos grupos musculares principales por sesión y usar dos variantes para cada uno.</b></li>
            </ol>

        </div>
        <div className={classes.competition__boxTwo}>
            <h2 className={classes.competition__titleSecondary}>ARTÍCULOS RELACIONADOS</h2>
            <img className={classes.competition__boxTwoBanner} src="https://cdn.pixabay.com/photo/2020/09/27/03/38/woman-5605529_1280.jpg" alt="Article Banner"/>
            <div className={classes.competition__boxTwoImages}>
                <img className={classes.competition__articleImage} src="https://cdn.pixabay.com/photo/2016/11/19/17/20/athlete-1840437_1280.jpg" alt="Article recommended"/>
                <img className={classes.competition__articleImage} src="https://cdn.pixabay.com/photo/2016/11/19/17/20/athlete-1840437_1280.jpg" alt="Article recommended"/>
                <img className={classes.competition__articleImage} src="https://cdn.pixabay.com/photo/2016/11/19/17/20/athlete-1840437_1280.jpg" alt="Article recommended"/>
            </div>
        </div>
        
    </div>
    <div className={classes.galleryContainer__title}>
          <p className={classes.galleryContainer__titlePrincipal}>
            ¡Para ponerte grande y fuerte más rápido!
          </p>
          <div className={classes.galleryContainer__gallery}>
            <Fade left>
              <Gallery categoria="Aumento" />
            </Fade>
          </div>
        </div>
        <div className={classes.galleryContainer__title}>
          <div className={classes.galleryContainer__gallery}>
          <p className={classes.galleryContainer__titlePrincipal}>
            Más poder Más masa
          </p>
            <Fade left>
              <Gallery categoria="Aumento1" />
            </Fade>
          </div>
        </div>
    </div>
    )
}
export default Gain;

const useStyles = makeStyles((theme) => ({
    competition: {
        width: '100%',
    },
    competition__container: {
        width: '90%',
        margin: '4rem auto',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: theme.spacing(8)
    },
    detail__title: {
        fontSize: '2.4rem',
        color: '#5C5C5C',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: '2rem 0',
        textTransform: 'uppercase'
    },
    detail__text: {
        fontSize: '1.2rem',
        color: '#333',
        fontWeight: '600',
        textAlign:'justify'
    },
    competition__banner: {
        width: '100%',
        height: '80vh'
    },
    competition__boxOne: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2)
    },
    // BoxTwo
    competition__boxTwoImages: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: theme.spacing(1.4)
    },
    competition__articleImage: {
        width: '100%',
        height: '140px'
    },
    competition__boxTwoBanner: {
        width: '100%',
        height: '300px',
        marginBottom: theme.spacing(1)
    },
    competition__boxTwoList: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2)
    },
    competition__boxTwoLi: {
        fontSize: '1.3rem',
        color: '#333',
        fontWeight: '600',
        textAlign: 'justify'
    },
    galleryContainer__titlePrincipal:{
        color: '#5C5C5C',
        fontSize: '2.8rem',
        fontWeight: '750',
        fontStyle: 'italic',
        marginBottom: '.6rem',
        marginTop: '2rem',
    },
    galleryContainer__title: {
        textAlign: 'center'
    },
}))

