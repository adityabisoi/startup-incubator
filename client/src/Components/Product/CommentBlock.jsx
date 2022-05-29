import React from 'react';
import { Button, Icon} from "semantic-ui-react";

export default function CommentBlock({comment}) {

    let style = {
        // width:'1200px',
        minHeight:'100px',
        padding:'1em',
        background: '#FFFFFF',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
        margin:'1em 1em'
    }
    
    return (
        <div>
            <div style = {style}>
                <p>{comment.comment_data}</p>
                <Button
                    icon
                    labelPosition="left"
                    style={{ height: "40px" }}
                    >
                    <i class="thumbs up icon"></i>
                    0
                </Button>
            </div>
        </div>
    )
}