import React from 'react';
import { useParams } from 'react-router-dom';
import {dummyProducts as data} from '../../utils/constants';
import Description from './Description';
import CommentSection from './CommentSection';

const Product = () => {
    const style = {
        minHeight: '750px',
        margin: '0 auto',
        padding: '1.5em',
        width: '80%',
        background: '#FFFFFF',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
        borderRadius: '4px',
        overflow: 'hidden',
    };

    let params = useParams();
    
    return (
        <div style={style}>

            <h1>Product {params.product_id} is rendered</h1>
            <Description></Description>
            
            <div style = {{marginTop : '4em'}}><h2>Comments</h2></div>
            <CommentSection product_data = {data[params.product_id - 1]}></CommentSection>
        </div>
    );
}

export default Product;