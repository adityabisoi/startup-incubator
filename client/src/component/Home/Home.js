import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import Products from '../ProductPreview/Products';
import Create from '../Create/Create';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Grow, Grid,  Button, Paper ,Dialog} from '@material-ui/core';

import { getProducts } from '../../action/product';

const Home = () => {
  const dispatch =useDispatch();

  const history = useHistory();

 
  
  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch]);

 
  return (
<>
      <Create   />
       <Container>
      
        <Grid item  justifyContent="center" spacing={2}>
        <Products />
        </Grid>
   
    
      </Container>

</>

  )
}

export default Home