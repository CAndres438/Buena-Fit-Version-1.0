import { makeStyles } from "@material-ui/core";

const Support = () => {
    const classes = useStyles();
  return (
    <div className={classes.home}>
      <div className={classes.home__opacity}>
        <img
          className={classes.home__banner}
          src="https://m.media-amazon.com/images/I/61u-qC6Z-mL._AC_SL1500_.jpg"
          alt="Banner Principal"
        />
        <div className={classes.banner__fadeBottom}></div>
      </div>
    </div>
  );
};

const useStyles = makeStyles ((theme) => ({
    home: {
      width: "100%",
      position: "relative",
      height: "100vh",
    },
    home__opacity: {
      position: "relative",
    },
    home__banner: {
      width: "100%",
      position: "relative",
    },

}));
export default Support;
