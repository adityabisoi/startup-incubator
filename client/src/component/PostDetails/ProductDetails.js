import React, { useEffect,useState } from 'react';
import { Paper, Button,Typography, CircularProgress, Divider,Dialog,AppBar } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import CommentSection from "./Comment";
import { useParams, useHistory } from 'react-router-dom';
import { getProduct } from '../../action/product';
import useStyles from './style';


const ProductDetails = () => {
  const product= useSelector((state) => state.product);
  const { id} = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  
  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  if(!product){
    return (
    <div>No post</div>
  )}
  

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' ,marginTop:"20px",marginLeft:"9px",marginRight:"14px"}} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{product.title}</Typography>
          <Typography gutterBottom variant="body1" component="p">{product.message}</Typography>
          <Typography variant="body1">{moment(product.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1"><strong>
            <CommentSection product={product}/>
          </strong></Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={product.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={product.title} />
        </div>
        </div>
       
    </Paper>
  );
};

export default ProductDetails; 