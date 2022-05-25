import React from "react";
import CommentBlock from "./CommentBlock";

export default function CommentSection(props) {
  let data = props.product_data;
  return (
    <div>
      {data.comments.map((comment) => {
        return <CommentBlock commentDetails={comment} id={data.id}></CommentBlock>;
      })}
    </div>
  );
}
