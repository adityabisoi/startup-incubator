import React from 'react';
import { Button, Icon} from "semantic-ui-react";

export default function CommentBlock({comment}) {
    const [likes,setLikes] = React.useState(0);
    let style = {
        // width:'1200px',
        minHeight:'100px',
        padding:'1em',
        background: '#FFFFFF',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
        margin:'1em 1em'
    }
    function handleLikes()
    {
        // let str = localStorage.getItem('dummyProducts');
        // let obj = JSON.parse(str);
        // obj[id-1].comments[details.comment_id-1].comment_likes = likes+1;
        // let JsonObj = JSON.stringify(obj);
        // localStorage.setItem('dummyProducts',JsonObj);
        // setLikes(1 + likes);
    }
    return (
        <div>
            <div style = {style}>
                <h4>comment number </h4>
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