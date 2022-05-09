import { useState, useEffect } from "react";
import axios from "axios";

// Material UI
import { makeStyles } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { selectedModal } from './redux/actions/actionModal';
import { URL } from '../helper/helper';

const initialState = [
  {
    id: 1,
    name: "npc_dota_hero_antimage",
    localized_name: "Anti-Mage",
    primary_attr: "agi",
    attack_type: "Melee",
    poster: "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png",
    animation: "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.webm",
    image: "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/antimage.png",
    avatar: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png",
    roles: [
      "Carry",
      "Escape",
      "Nuker"
    ],    
    img: "/apps/dota2/images/dota_react/heroes/antimage.png?",
    icon: "/apps/dota2/images/dota_react/heroes/icons/antimage.png?",
    base_health: 200,
    base_health_regen: 0.25,
    base_mana: 75,
    base_mana_regen: 0,
    base_armor: 0,
    base_mr: 25,
    base_attack_min: 29,
    base_attack_max: 33,
    base_str: 21,
    base_agi: 24,
    base_int: 12,
    str_gain: 1.6,
    agi_gain: 2.8,
    int_gain: 1.8,
    attack_range: 150,
    projectile_speed: 0,
    attack_rate: 1.4,
    move_speed: 310,
    turn_rate: null,
    cm_enabled: true,
    legs: 2
  }
]

function Training() {
  const classes = useStyles();
 const [characters, setCharacters] = useState(initialState);

  console.log(characters);

  useEffect(() => {
  const getCharacters = async () => {
    const movies = await axios.get(URL);
    console.log(movies.data);
    const characterData = movies.data;
    setCharacters(characterData);    
   }
    getCharacters();
  }, [])

  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  // const selectHero = (item) => {
    // dispatch(selectedExercise(item));
    // navigate('/exercise/');
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
            <div className={classes.content__filterIcon} style={{backgroundImage: 'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png")'}}/>
            <div className={classes.content__filterIcon} style={{backgroundImage: 'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png")'}}/>
            <div className={classes.content__filterIcon} style={{backgroundImage: 'url("https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png"")'}}/>
          </div>
          <h2 className={classes.content__filterTitle}>COMPLEJIDAD</h2>
          <div className={classes.content__filterBox} >
            <div className={classes.content__filterIcon} />
            <div className={classes.content__filterIcon} />
            <div className={classes.content__filterIcon} />
          </div>
          <div className={classes.content__search}>
          <img className={classes.content__searchIcon} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/1200px-Vector_search_icon.svg.png' alt='Search Icon'/>
          <input type='text' className={classes.content__searchInput}/>
          </div>
          </div>
        </div>
        <div className={classes.grid}>
        {/* <video className={classes.image} autoPlay controls loop playsInline muted poster={characters.poster}><source type="video/webm" src='https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/bane.webm'/><img src={characters.image} /></video> */}

      {
        // characters.map((item) => (
        // ))
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
        top: '55%',
      },
      '& img': {
        opacity: '.9'
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
    backgroundColor: 'rgb(15,17,20)',
    background: 'linear-gradient(90deg, rgba(15,17,20,1) 0%, rgba(19,23,27,1) 44%, rgba(31,39,43,1) 57%, rgba(70,80,86,1) 100%)'
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
    flex: '.6'
  },
  content__searchInput: {
    background: 'transparent',
    padding: '.8rem .4rem',
    outline: 'none',
    border: 'none',
    color: '#FFF'
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
 
}))

export default Training;