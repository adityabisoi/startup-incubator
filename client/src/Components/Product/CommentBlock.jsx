import React from 'react';

export default function CommentBlock(props) {
    
    let style = {
        // width:'1200px',
        minHeight:'100px',
        padding:'1em',
        background: '#FFFFFF',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
        margin:'1em 1em'
    }
    let details = props.commentDetails;

    return (
        <div>
            <div style = {style}>
                <h4>comment number {details.comment_id}</h4>
                <p>{details.comment_text}</p>
            </div>
        </div>
    )
}