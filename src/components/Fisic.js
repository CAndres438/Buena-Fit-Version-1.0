import React, { useState } from 'react'
import { MarkPrice } from '../styled/styledComponents';

//Material UI
import { makeStyles, Typography } from '@material-ui/core';
import Sidebar from './Sidebar';

const Fisic = ({item}) => {

  const classes = useStyles();

  const [showSidebar, setShowSidebar] = useState([]);
  const [modal, setModal] = useState(false);

  const editarModal = (fisicItem) => {
    console.log('setShowModal', fisicItem.nombre);
    setModal(true);
    console.log('MODAL', modal);
    if(!modal) {
      setModal(true);
      setShowSidebar(fisicItem);
    } else {
      setModal(false);
      setShowSidebar([]);
    }
  }

  return (
    <div className={classes.fisic}>
        <img onClick={() => editarModal(item)} className={classes.fisic__image} src={item.foto} alt="editar"/>
        <div className={classes.fisic__content}>
        <Typography variant='body' className={classes.fisic__title}>{item.nombre}</Typography>
        <MarkPrice>{item.peso}KG</MarkPrice>
        </div>

        {
          modal === true ? <Sidebar modalSidebar={showSidebar}  modalBoolean={modal}/> : ''
        }
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  fisic: {
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '4px',
    padding: theme.spacing(1),
    '&:hover': {
      boxShadow: ' 6px 6px 22px #b1b1b1, -6px -6px 22px #ffffff;'

    }
  },
  fisic__image: {
    width: '100%',
    height: '240px',
    objectFit: 'content'
  },
  fisic__content: {
    padding: theme.spacing(1.2),
    height: '100px'
  }
}))

export default Fisic