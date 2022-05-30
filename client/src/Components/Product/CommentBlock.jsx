import React from 'react';
import { Button, Icon} from "semantic-ui-react";

export default function CommentBlock({comment,product_id}) {
    const[likes,setLikes] = React.useState(comment.comment_likes);
    let style = {
        // width:'1200px',
        minHeight:'100px',
        padding:'1em',
        background: '#FFFFFF',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
        margin:'1em 1em'
    }
    async function handleLikes(){
        const res = await fetch(`/incrementCommentLikes/${product_id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({comment_id:comment._id})
        });
        await res.json();
        setLikes(likes+1);
    }
    return (
        <div>
            <div style = {style}>
                <p>{comment.comment_data}</p>
                <Button
                    icon
                    labelPosition="left"
                    style={{ height: "40px" }}
                    onClick={handleLikes}
                    >
                    <i class="thumbs up icon"></i>
                    {likes}
                </Button>
            </div>
        </div>
    )
}