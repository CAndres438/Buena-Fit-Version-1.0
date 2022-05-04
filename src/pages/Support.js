import { makeStyles } from "@material-ui/core";

const Support = () => {
    const classes = useStyles();
  return (
    <div className={classes.home}>
      <div className={classes.home__opacity}>
        <img
          className={classes.home__banner}
          src="https://cdn.pixabay.com/photo/2017/10/22/09/02/man-2877135__340.jpg"
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
