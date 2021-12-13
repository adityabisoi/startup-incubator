import React from 'react';
import CommentBlock from './CommentBlock';

export default function CommentSection(props) {
    let data = props.product_data;
    console.log(props);
    return (
        <div>
         {
             data.comments.map((comment) => {
                 return <CommentBlock commentDetails = {comment}></CommentBlock>
             })
         }
        </div>
    )
}