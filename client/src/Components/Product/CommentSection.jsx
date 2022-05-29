import React from "react";
import CommentBlock from "./CommentBlock";

export default function CommentSection({comments}) {
  
  return (
    <div>
      {comments.map((comment) => {
        return <CommentBlock comment={comment}></CommentBlock>;
      })}
    </div>
  );
}
