import React, { useEffect, useState } from 'react';

//Material UI
import { makeStyles, Slider, Typography } from '@material-ui/core';
import { ButtonSecondary, DarkTypographyStyled, GrayTitleStyled } from '../styled/styledComponents';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { listAsync } from '../redux/actions/actionProducts';


const Category = () => {
  const classes = useStyles();

  const { products } = useSelector(store => store.products);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('Definición');
  const [ammount, setAmmount] = useState(500000);

  const handleChange = (e ,newValue) => {
    setAmmount(newValue);
  }

  useEffect(() => {
    dispatch(listAsync());
  }, [])
  
  return (
    <div className={classes.category}>
        {/* <Details /> */}
      <div className={classes.category__container}>
        
        <div className={classes.category__title}>
          <Typography className={classes.detail__title}><i>PRODUCTOS</i></Typography>
          
        </div>
        <div className={classes.category__selector}>
          <DarkTypographyStyled>Precio</DarkTypographyStyled>
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
                <h2 className={classes.detail__title}>Trending Products</h2>
            <div className={classes.category__contentFlex}>
              <h4 className={classes.category__option} onClick={() => setFilter('Definición')}>Definición</h4>
              <h4 className={classes.category__option} onClick={() => setFilter('Aumento')}>Aumento</h4>
              <h4 className={classes.category__option} onClick={() => setFilter('Competición')}>Competición</h4>
              <h4 className={classes.category__option} onClick={() => setFilter('Funcional')}>Funcional</h4>
            </div>
              </div>
              <div className={classes.category__containerFlexLineTwo}>
                 {
                   products.filter((item) => item.categoria === filter)
                    .filter((item) =>   item.precio < ammount)
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
      {/* <div className={classes.category__title}>
          <ButtonSecondary>LOAD MORE</ButtonSecondary>
          OR
           <DarkTypographyStyled>CHOOSE YOUR TRAINING</DarkTypographyStyled>
        </div> */}
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
  category__contentFlex: {
    color: '#B5B5B5'
},
category__option: {
  margin: '1rem 0',
  cursor: 'pointer'
},

detail__title: {
  fontSize: '2.4rem',
  color: '#5C5C5C',
  fontWeight: 'bold'
},
}))

export default Category