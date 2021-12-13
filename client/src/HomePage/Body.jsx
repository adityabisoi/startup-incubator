import React from 'react';
import { Grid } from 'semantic-ui-react';
import ProductPreview from '../Components/Product/ProductPreview';
import * as constants from '../utils/constants';

const Body = () => {
    const dummyProducts  = constants.dummyProducts;
    return (
        <div style={{ margin: '2rem', padding: '2rem', border: '1px solid black', height:'80%', minHeight:'750px' }}>
            <Grid>
               {dummyProducts.map(product => (
                   <ProductPreview
                    id={product.id}
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