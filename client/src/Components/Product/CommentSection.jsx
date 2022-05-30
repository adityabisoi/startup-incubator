import React from "react";
import CommentBlock from "./CommentBlock";

export default function CommentSection({comments,product_id}) {
  comments.sort((a, b) =>
    a.comment_likes > b.comment_likes ? -1 : b.comment_likes > a.comment_likes ? 1 : 0
  );
  return (
    <div>
      {comments.map((comment) => {
        return <CommentBlock comment={comment} product_id={product_id}></CommentBlock>;
      })}
    </div>
  );
}
