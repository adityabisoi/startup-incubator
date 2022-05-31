import React from 'react';
import { Button, Icon} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";

export default function CommentBlock({comment,product_id}) {
    let history = useNavigate();
    const[likes,setLikes] = React.useState(comment.comment_likes);
    const [hasLiked,setHasLiked] = React.useState(false);
    
    if(localStorage.getItem('token')){
        fetch('/getCurrentUser',{
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            'auth-token': localStorage.getItem('token')
          }
        })
        .then(response =>response.json())
        .then(response =>{
          for(let i=0;i<comment.whoLikedComment.length;i++)
          {
            if(comment.whoLikedComment[i]._id.toString()===response._id){
              setHasLiked(true);
            }
          }
        });
      }

    let style = {
        // width:'1200px',
        minHeight:'100px',
        padding:'1em',
        background: '#FFFFFF',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
        margin:'1em 1em'
    }
    async function handleLikes(){
        if(!localStorage.getItem('token')){
            history('/login');
        }else{
            const res = await fetch(`/incrementCommentLikes/${product_id}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({comment_id:comment._id})
            });
            await res.json();
            if(res.status!=400){
                setLikes(likes+1);
            }
        }
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
                    color={hasLiked?'blue':'white'}
                    >
                    <i class="thumbs up icon"></i>
                    {likes}
                </Button>
            </div>
        </div>
    )
}