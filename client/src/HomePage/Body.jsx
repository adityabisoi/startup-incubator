import React from 'react';
import { Grid } from 'semantic-ui-react';
import Product from '../Components/Product/Product';
import * as constants from '../utils/constants';

const Body = () => {
    const dummyProducts  = constants.dummyProducts;
    return (
        <div style={{ margin: '2rem', padding: '2rem', border: '1px solid black' }}>
            <Grid>
               {dummyProducts.map(product => (
                   <Product
                     heading={product.heading}
                     description={product.description}
                     likes ={product.likes}
                     image ={product.imagePath}
                   />
               ))}
            </Grid>
        </div>
    )
}


export default Body;