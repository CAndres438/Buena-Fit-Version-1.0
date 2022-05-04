import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { ButtonStyled, MarkPrice } from '../styled/styledComponents';
import { Field,Form,Formik } from "formik";
import { editAsync } from "../redux/actions/actionFisicos";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    etapa: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    nick: Yup.string(),
    peso: Yup.number()
});


const Sidebar = ({ modalSidebar } ) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(true);

  const handleClicked = () => {
      setClicked(false);
  }

  const handleSubmit = (values) => {
    // e.preventDefault()
  //  console.log(values)
  const nombre = modalSidebar.nombre; 
  console.log('SIDEBAR FORM', values);
  console.log('SIDEBAR FORM NOMBRE', nombre)

   dispatch(editAsync(nombre, values))
   setClicked(false);

}




  return (
    <div className={clicked? classes.sidebar : classes.none }>
        <div className={classes.sidebar__container}>
            <div className={classes.sidebar__modal}>
            <span onClick={handleClicked}>
                <CancelPresentationIcon className={classes.sidebar__close}/>
            </span>

            <h2>{modalSidebar.nombre}</h2>
            <img className={classes.sidebar__image} src={modalSidebar.foto} alt='Modal Edit'/>
            <h2>{modalSidebar.etapa}</h2>
            <MarkPrice>${modalSidebar.peso}</MarkPrice>
           

<Formik
      initialValues={{
        nombre: modalSidebar.nombre,
        etapa: modalSidebar.etapa,
        peso: modalSidebar.peso,
       
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        handleSubmit(values)
      }}
    >
      {({ errors, touched}) => (
        <Form className={classes.sidebar__form}
        style={{
          
        }}
        >
                <h1>Editar</h1>
          <Field className={classes.sidebar__input} placeholder="Nombre del Producto" name="nombre" />
          {errors.nombre && touched.nombre ? (
            <div>{errors.nombre}</div>
          ) : null}

          <Field className={classes.sidebar__input} placeholder="Etapa" name="etapa" />
          {errors.etapa && touched.etapa ? (
            <div>{errors.etapa}</div>
          ) : null}
          <Field className={classes.sidebar__input} placeholder="Peso" name="peso" />
          {errors.peso && touched.peso ? (
            <div>{errors.peso}</div>
          ) : null}
       
          
     

          <ButtonStyled 
          type="submit">Editar</ButtonStyled>
        </Form>
      )}
    </Formik>

        </div>
    </div>
       
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    sidebar: {
        position: 'absolute',
        padding: theme.spacing(2),
        backgroundColor: '#CCC',
        top: '0',
        bottom: '0',
        right: '0',
        left: '0',
        zIndex: '1000',
        opacity: '.9',
        transition: '3s all ease'
    },
    sidebar__container: {
        position: 'relative',
        width: '80%',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sidebar__modal: {
        position: 'relative',
        width: '100%',
        backgroundColor: '#FFF',
        padding: theme.spacing(4)
    },
    none: {
        display: 'none',
        pointerEvents: 'none',
    },
    sidebar__image: {
        widht: '200px',
        height: '200px'
    },
    sidebar__form: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1)
    },
    sidebar__input: {
        padding: '.4rem .6rem'
    },
    sidebar__close: {
        position: 'absolute',
        top: '45%',
        right: '-32px',
        fontSize: '4rem'
    }
  
}))

export default Sidebar