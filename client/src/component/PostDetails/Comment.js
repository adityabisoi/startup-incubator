import React, { useState, useRef } from 'react';
import { Typography, TextField, Button,Dialog } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';

import { comment } from '../../action/product';
import useStyles from './style';

const Comment = ({ product }) => {
   
  const [coment, setComent] = useState('');
 

  const dispatch = useDispatch();
  const [comments, setComments] = useState(product?.comments);
  const classes = useStyles();
  const commentsRef = useRef();

  const handleComment = async() => {
    console.log(product)
  const newComments= await dispatch(comment(coment,product._id))
    setComent('');
    setComments(newComments);

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">Comments</Typography>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
            {c}
            
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
      
      

        <div className={classes.div}>
          <Typography gutterBottom variant="h6">Write a comment</Typography>
          <TextField fullWidth rows={4} variant="outlined" label="Comment" multiline value={coment} onChange={(e) => setComent(e.target.value)} />
          <br />
         
          <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment.length} color="primary" variant="contained" onClick={handleComment}>
            Comment
          </Button>

        </div>
    
      </div>
    </div>
  );
};

export default Comment;