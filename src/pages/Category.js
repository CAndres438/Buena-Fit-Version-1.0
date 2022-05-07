import React, { useEffect, useState } from 'react';

//Material UI
import { makeStyles, Slider } from '@material-ui/core';
import { ButtonSecondary, DarkTypographyStyled, GrayTitleStyled } from '../styled/styledComponents';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { listAsync } from '../redux/actions/actionProducts';


const Category = () => {
  const classes = useStyles();

  const { products } = useSelector(store => store.products);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('otros');
  const [ammount, setAmmount] = useState(500000);

  const handleChange = (e ,newValue) => {
    setAmmount(newValue);
  }

  useEffect(() => {
    dispatch(listAsync());
  }, [])
  
  return (
    <div className={classes.category}>
      <img className={classes.category__banner} src='./principals-home/principal-2.jpg'/>
        {/* <Details /> */}
      <div className={classes.category__container}>
        
        <div className={classes.category__title}>
          <GrayTitleStyled><i>PRODUCTOS</i></GrayTitleStyled>
          
        </div>
        <div className={classes.category__selector}>
          <DarkTypographyStyled>PRECIO</DarkTypographyStyled>
            <Slider 
            value={ammount}
            onChange={handleChange}
            aria-labelledby='continuous-slider'
            min={0}
            max={500000}
            valueLabelDisplay='auto'
            color='secondary'
            />
        </div>
        {/* flex */}
          <div className={classes.category__containerFlex}>
              <div className={classes.category__containerFlexLineOne}>
                <h2>TRENDING PRODUCTS</h2>
            <div className={classes.category__contentFlex}>
              <h4 className={classes.category__option} onClick={() => setFilter('otros')}>OTROS</h4>
              <h4 className={classes.category__option} onClick={() => setFilter('Elite')}>AUNMENTO</h4>
              <h4 className={classes.category__option} onClick={() => setFilter('PopularProgress')}>DEFINICIÓN</h4>
            </div>
              </div>
              <div className={classes.category__containerFlexLineTwo}>
                 {
                   products.filter((item) => item.categoria === filter)
                    .filter((item) => item.precio < ammount)
                    .map((item,index) => (
                      <Product 
                      key={index}
                      product={item}
                      />
                    )) 
                 }
              </div>
          </div>
        
        {/* flex */}
      </div>
      <div className={classes.category__title}>
          <ButtonSecondary>LOAD MORE</ButtonSecondary>
          OR
           <DarkTypographyStyled>CHOOSE YOUR TRAINING</DarkTypographyStyled>
        </div>
        <div className={classes.category__workout}>
              <div className={classes.category__workoutFlex}>
                <div className={classes.category__workoutContentImage}>
                <img className={classes.category__workoutImage} src='https://www.cope.es/blogs/t-cuidamos/wp-content/uploads/sites/12/2018/12/gimnasio.jpg' alt='Workout 1'/>
                <span className={classes.category__workoutSpan}>AUNMENTO</span>
                </div>
                <div className={classes.category__workoutContentImage}>
                <img className={classes.category__workoutImage} src='https://www.cope.es/blogs/t-cuidamos/wp-content/uploads/sites/12/2018/12/gimnasio.jpg' alt='Workout 2'/>
                <span className={classes.category__workoutSpan}>DEFINICIÓN</span>
                </div>
              </div>
        </div>
        <Footer />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  category: {
    width: '100%',
    position: 'relative',
    height: '100%',
  },
  category__banner: {
    width: '100%',
  },
  category__container: {
    width: '94%',
    margin: '0 auto'
  },
  category__title: {
    width: '100%',
    textAlign: 'center',
    margin: '2rem 0',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1.6)
  },
  category__containerFlex: {
    // display: 'flex',
    // alignItems: 'flex-start',
    // justifyContent: 'space-between'
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: "40px",
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1.8fr 2fr',
    }
  },
  category__containerFlexLineOne: {
    position: 'relative',
    height: '100%',
    boxShadow:  '5px 5px 10px #bebebe,-5px -5px 10px #ffffff',
    padding: '2rem 1rem',
    backgroundColor: 'rgb(43,49,53)',
      background: 'linear-gradient(90deg, rgba(43,49,53,1) 0%, rgba(67,72,78,1) 44%, rgba(62,67,73,1) 57%, rgba(46,51,55,1) 100%)'
  },
  category__containerFlexLineTwo: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(4),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    }
  },
  category__selector: {
    width: '400px',
    margin: '0 auto'
  },
  category__workout: {
    display: 'flex',
    flexDirection: 'column'
  },
  category__workoutFlex: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    maxHeight: '280px',
    overflow: 'hidden',
    backgroundColor: '#000'
  },
  category__workoutImage: {
    width: '100%',
    height: '280px',
    objectFit: 'cover',
    cursor: 'pointer',
    transition: 'all .3s ease-in',
    '&:hover': {
      transform: 'scale(1.1)',
      opacity: '.6'
    },
  },

  category__contentFlex: {
    color: '#B5B5B5'
},
category__option: {
  margin: '1rem 0',
  cursor: 'pointer'
},
category__workoutContentImage: {
  position: 'relative',
  width: '100%',
  height: '100%'
},
category__workoutSpan: {
  position: 'absolute',
  fontSize: '2.4rem',
  color: '#FFF',
  top: '50%',
  left: '50%',
  transform: 'translateX(-50%)'
}
}))

export default Category