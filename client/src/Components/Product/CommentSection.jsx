import React from "react";
import CommentBlock from "./CommentBlock";

export default function CommentSection({comments,product_id}) {
  
  return (
    <div>
      {comments.map((comment) => {
        return <CommentBlock comment={comment} product_id={product_id}></CommentBlock>;
      })}
    </div>
  );
}
