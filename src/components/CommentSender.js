import React, { useEffect, useState } from 'react'

//Material UI
import { Avatar, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addCommentAsync, listCommentsAsync } from '../redux/actions/actionComments';

const CommentSender = ({user, product}) => {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  console.log('USSSSSSER IN COMMENT SENDER', product );

  const date = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(addCommentAsync({
      message: input,
      timestamp: date,
      profilePic: user?.photoURL,
      username: user?.email,
      nombre: product?.nombre
    }));
    setInput('');
  }

  useEffect(() => {

  }, [])
  


  return (
    <div className={classes.commentSender}>
      <div className={classes.commentSender__top}>
        <Avatar src={user?.photoURL}/>
        <form className={classes.commentSender__form} onSubmit={handleSubmit}>
          <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={classes.commentSender__input}
          placeholder={'Déjanos tu opinión...'}
          >
          </input>

          <button className={classes.commentSender__inputSubmit} type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
     commentSender: {
        width: '100%',
        marginBottom: theme.spacing(2.8)
    },
    commentSender__top: {
      display: 'flex',
    },
    commentSender__form: {
      display: 'flex',
      flex:'1'
    },
    commentSender__input: {
      outlineWidth: 0,
      border: 'none',
      padding: '.2rem 1.4rem',
      margin: '0 10px',
      borderRadius: '12px',
      backgroundColor: '#EFF2F5',
      flex: 1
    },
    commentSender__inputSubmit: {
      display: 'none'
    }


}))

export default CommentSender;