// Material UI
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';



const Navbar = () => {
  const classes = useStyles();

  

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__container}>
        <div className={classes.header__links}>
          <Link className={classes.header__link} to="/shop">
            Ventas
          </Link>
          <Link className={classes.header__link} to="/test">
            Buona Test
          </Link>
          <Link className={classes.header__link} to="/training">
            Entrenamientos
          </Link>
          <Link className={classes.header__link} to="/support">
            Soporte
          </Link>
          <div>
          <div className={classes.header__search}>
          <input className={classes.header__searchInput} />
          <SearchIcon className={classes.header__searchIcon} />
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: "100%",
    padding: ".8rem 0",
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "black",
   
  },
  navbar__container: {
    width: "98%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  header__link: {
    color: "#FFF",
    textDecoration: "none",
  },
  header__links: {
    display: "flex",
    gap: theme.spacing(2),
    zIndex: "100000",
  },
  header__search: {
    width: "100%",
    display: "flex",
    flex: ".4",
    alignItems: "center",
  },
  header__searchInput: {
    height: "12px",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    width: "100%",
    paddingLeft: "25px",
    color: 'black',
    fontWeight: '600'

  },
  header__searchIcon: {
    padding: "5px",
    height: "18px !important",
    backgroundColor: "#FFF",
    borderRadius: "5px",
    position: "absolute"
  },
}));

export default Navbar;