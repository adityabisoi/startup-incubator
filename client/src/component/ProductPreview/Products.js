import React from 'react'
import Product from "./Product/Product"
import useStyles from "./style"
import {useSelector} from "react-redux";
import {Grid ,CircularProgress} from "@material-ui/core"
const Products = ({post, setCurrentId }) => {
  const classes = useStyles();
  const products = useSelector((state)=> state.product);
  return ( <Grid className={classes.container} alignItems="stretch"  >
     
        {products.map((products)=>(
        
          <Grid key={products._id} className={classes.grid} item >   
              <Product products={products} setCurrentId={setCurrentId} />
  
          </Grid>
        
          
         ) )}
        
      </Grid>
    
  )
}

export default Products