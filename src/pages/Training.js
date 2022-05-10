import { useState, useEffect } from "react";
import axios from "axios";

// Material UI
import { makeStyles } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { selectedModal } from './redux/actions/actionModal';
import { URL } from '../helper/helper';

const initialState = []

function Training() {
  const classes = useStyles();
 const [characters, setCharacters] = useState(initialState);
 const [categoria, setCategoria] = useState('superior');
 const [complejidad, setComplejidad] = useState(1)
 const [value, setValue] = useState('');

  console.log(characters);

  useEffect(() => {
  const getCharacters = async () => {
    const movies = await axios.get(URL);
    const characterData = movies.data;
    setCharacters(characterData);    
   }
    getCharacters();
  }, [])

  // const handleChange = ({target}) => {
  //   const { value } = target;
  //   const dataFilter = characters.filter((item) => item.zona.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  //   console.log(dataFilter)
  //   setCharacters(dataFilter);
  // }

  return (
    <div className={classes.training}>
      <header className={classes.content}>
        <div className={classes.content__box}>
        <h2 className={classes.content__title}>ELIGE TU PRÓXIMO EJERCICIO</h2>
        <p className={classes.content__text}>Te mostramos toda nuestra serie de ejercicios. Con un video explícativo y una serie de reglas para hacerlos correctamente, junto con los errores más frecuentes que se comenten. Eres libre de verlos detallamente.
        </p>
        </div>
        <div className={classes.content__filter}>
          <div className={classes.content__filterContent}>
          <h2 className={classes.content__filterTitle}>CATEGORÍA</h2>
          <div className={classes.content__filterBox}>
            <div onClick={() => setCategoria('superior')} className={classes.content__filterIcon}/>
            <div onClick={() => setCategoria('inferior')} className={classes.content__filterIcon}/>
            <div onClick={() => setCategoria('core')} className={classes.content__filterIcon}/>
          </div>
          <h2 className={classes.content__filterTitle}>COMPLEJIDAD</h2>
          <div className={classes.content__filterBox} >
            <div onClick={() => setComplejidad(1)} className={classes.content__filterIcon} />
            <div onClick={() => setComplejidad(2)} className={classes.content__filterIcon} />
            <div onClick={() => setComplejidad(3)} className={classes.content__filterIcon} />
          </div>
          <div className={classes.content__search}>
          <img className={classes.content__searchIcon} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png' alt='Search Icon'/>
          <input placeholder="Elíge que quieres trabajar ..." onChange={(e) => setValue(e.target.value)} type='text' className={classes.content__searchInput}/>
          </div>
          </div>
          <div className={classes.content__filterDetails}>
            <h2>{ categoria }</h2>
            <h2>{ (complejidad == 1)? 'FÁCIL': (complejidad == 2)? "NORMAL" : "DÍFICIL" }</h2>
            <h2>{ value }</h2>
          </div>
        </div>
        <div className={classes.grid}>
        {/* <video className={classes.image} autoPlay controls loop playsInline muted poster={characters.poster}><source type="video/webm" src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bane.webm'/><img src={characters.image} /></video> */}

      {
        // characters.map((item) => (
        // ))

        (complejidad == 1 && categoria == 'superior' && value == '')?
        // .filter((item) => item.categoria === categoria)
        // .filter((item) => item.complejidad === complejidad)
        // .filter((item) => item.zona.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        characters.map((item) => (
          <div key={item.id} >
            {/* <Link to={`hero/${item.id}`}> */}
            <Link to={`/exercise/${item.id}`}>
            <div className={classes.gridContentItem}>
            <img className={classes.gridItem} src={item.poster} />
            <h2 className={classes.gridItemTitle}>{ item.titulo }</h2>
            </div>
            </Link>
            {/* </Link> */}
          </div>

        )): characters
        .filter((item) => item.categoria === categoria)
        .filter((item) => item.complejidad === complejidad)
        .filter((item) => item.zona.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        .map((item) => (
          <div key={item.id} >
            
            {/* <Link to={`hero/${item.id}`}> */}
            <Link to={`/exercise/${item.id}`}>
            <div className={classes.gridContentItem}>
            <img className={classes.gridItem} src={item.poster} />
            <h2 className={classes.gridItemTitle}>{ item.titulo }</h2>
            </div>
            </Link>
            {/* </Link> */}
          </div>

        ))
      }
</div>
      </header>

    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  training: {
    width: '100%',
    height: '100%',
    margin: '4rem 0',
  },
  image: {
    width: '100%',
    height: '100%'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: theme.spacing(3),
    minHeight: '40vh',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    }
  },
  gridItem: {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    borderRadius: '1px',
    zIndex: '100',
  },
  gridContentItem:{
    position: 'relative',
    width: '100%',
    height: '180px',
    backgroundColor: '#000',
    // background: '#e0e0e0',
    boxShadow: '5px 5px 10px #111,-5px -5px 10px #000',
    overflow: 'hidden',
    zIndex: '1000',
    transition: 'all .3s ease',
    "&:hover": {
      opacity: '.9',
      transform: 'scale(1.2)',
      '& h2': {
        top: '40%',
      },
      '& img': {
        opacity: '.4'
      }
    }
  },
  gridItemTitle: {
    position: 'absolute',
    fontSize: '1.6rem',
    textAlign: 'center',
    width: '100%',
    top: '100%',
    textTransform: 'uppercase',
    transition: 'top .3s ease',
        color: '#FFF',
        transition: 'all .3s ease',
    // bottom: '-100%',

   
  },
  content: {
    width: '75%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  content__box: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    marginBottom: '4rem'
  },
  content__title: {
    fontSize: '4vw',
    letterSpacing: '1px',
    color: '#000',
    textAlign: 'center'
  },
  content__text: {
    fontSize: '2vw',
    color: '#111',
    textAlign: 'center'
  },
  //FILTER CONTENT
  content__filter: {
    width: '100%',
    margin: '2rem 0',
    padding: '1rem 0',
    backgroundColor: '#111'
  },
  content__filterContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content__search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#25282A',
    padding: theme.spacing(1),
    flex: '.6',
  },
  content__searchInput: {
    background: 'transparent',
    padding: '.8rem .4rem',
    outline: 'none',
    border: 'none',
    color: '#FFF',
    fontSize: '1.2rem'
  },
  content__searchIcon: {
    width: '40px',
    height: '40px'
  },
  content__filterTitle: {
    color: '#7E8DA4',
    fontSize: '1.3rem',
    fontWeight: '400',
    letterSpacing: '2px'
  },
  content__filterBox: {
    display: 'flex'
  },
  content__filterIcon: {
    width: '40px',
    height: '40px',
    backgroundImage: "url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png')",
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    filter: 'brightness(0.5) saturate(0)',
    cursor: 'pointer'
  },
  content__filterDetails: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 3fr)',
    padding: '0 1rem',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
}))

export default Training;