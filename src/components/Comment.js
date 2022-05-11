import React from 'react'

//Material UI
import { Avatar, makeStyles } from '@material-ui/core'
import { TypographyStyled } from '../styled/styledComponents';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import MessageIcon from '@material-ui/icons/Message';
import SendIcon from '@material-ui/icons/Send';

const Comment = ({profilePic, image, username, timestamp, message, product}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.comment__boxFlex}>
            <Avatar className={classes.comment__avatar} src={profilePic} alt='Avatar'/>
            <TypographyStyled>{username}</TypographyStyled>
        </div>

        <div className={classes.comment__box}>
            <TypographyStyled>
                {message}
            </TypographyStyled>
        </div>

        <div className={classes.comment__box}>
            <TypographyStyled>
            {product.nombre}
            </TypographyStyled>
            <TypographyStyled>
                A 45 personas les resultó útil
            </TypographyStyled>
            <TypographyStyled>
            Timestamp...
            </TypographyStyled>
            <div className={classes.comment__options}>
                <div className={classes.comment__option}>
                    <ThumbUpAltIcon />
                    <p>Me gusta</p>
                </div>
                <div className={classes.comment__option}>
                    <MessageIcon />
                    <p>Comentar</p>
                </div>
                <div className={classes.comment__option}>
                    <SendIcon />
                    <p>Compartir</p>
                </div>
            </div>
        </div>

    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        marginBottom: theme.spacing(6)
    },
    comment__avatar: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
    },
    comment__boxFlex: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: theme.spacing(1)
    },
    comment__box: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(.6),
    },
    comment__options: {
        paddingTop: theme.spacing(.8),
        borderTop: '1px solid lightgray',
        display: 'flex',
        justifyContent: 'right',
        gap: theme.spacing(5),
        fontSize: '.8rem',
        color: 'gray',
        cursor: 'pointer',
        padding: theme.spacing(1)
    },
    comment__option: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(.6),
        flex: 1,
        '& p': {
            marginLeft: theme.spacing(.8)
        },
        '&:hover': {
            color: 'lightblue'
        }
    },
}))

export default Comment