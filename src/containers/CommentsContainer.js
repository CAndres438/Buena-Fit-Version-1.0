import React, { useEffect, useState } from "react";
import Comment from "../components/Comment";
import CommentSender from "../components/CommentSender";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { listCommentsAsync } from "../redux/actions/actionComments";

// Material UI
import { makeStyles, Typography } from "@material-ui/core";

const CommentsContainer = ({ product }) => {
  const classes = useStyles();

  const [user, setUser] = useState(null);
  const [photoURL, setPhotoURL] = useState("");

  const { comments } = useSelector((store) => store.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCommentsAsync());
    const auth = getAuth().currentUser;
    const avatar = user?.photoURL;
    setPhotoURL(avatar);
    setUser(auth);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.root__container}>
        <div className={classes.commentsContainer__questionsBox}>
          <Typography className={classes.commentsContainer__questions}>
            {comments.filter((item) => item.nombre == product.nombre).length}{" "}
            PREGUNTAS
          </Typography>
        </div>
        <CommentSender product={product} user={user} />
        {comments
          .filter((item) => item.nombre == product.nombre)
          .map((item, index) => (
            <Comment
              key={index}
              username={item.username}
              profilePic={item.profilePic}
              message={item.message}
              timestamp={item.timestamp}
              product={product}
            />
          ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "600px",
    margin: "4rem 0",
  },
  root__container: {
    width: "94%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
  commentsContainer__questionsBox: {
    backgroundColor: "#393A3F",
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  commentsContainer__questions: {
    padding: ".6rem",
    color: "#FFF",
  },
}));

export default CommentsContainer;
