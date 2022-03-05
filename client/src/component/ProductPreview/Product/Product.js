import React from 'react'
import useStyles from "./style"


import {Card,CardActions,CardContent,ButtonBase,CardMedia,Button,Typography} from "@material-ui/core"
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {useHistory} from "react-router-dom";
import moment from "moment";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { upvote } from '../../../action/product';
const Product = ({ products,setCurrentId }) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const openPost=()=>{
        history.push(`/product/${products._id}`); 
    }
          
  return (
    <Card className={classes.card} raised elevation={6}>
     <div className={classes.overlay}>
<Typography variant='body2'>{moment(products.createdAt).fromNow()}</Typography>
</div>
   
         <Typography  className ={classes.title} variant="h5" gutterButtom>{products.title}</Typography>
         <CardContent className={classes.cardimg}>
         <CardMedia className={classes.media} image={ 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}  title={products.title} ></CardMedia>
         <Typography className={classes.message}  variant="body2" color="textSecondary" component="p" > {products.message}</Typography>
        
        
         </CardContent>
         <ButtonBase onClick={openPost} >
         <Button  className='d' variant="contained" color="primary">
        Details
        </Button> </ButtonBase>
        
         <CardActions className={classes.cardActions}>
         <Button size="small" color="primary" onClick={()=>dispatch(upvote(products._id))} >
        <ThumbUpAltIcon /> {products.upvote}
        </Button>
        
         </CardActions>
     </Card>
  )
}

export default Product;