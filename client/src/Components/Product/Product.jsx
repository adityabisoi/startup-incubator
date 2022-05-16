import React from 'react';
import { useParams} from 'react-router-dom';
import {dummyProducts as data} from '../../utils/constants';
import Description from './Description';
import CommentSection from './CommentSection';
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
    const style = {
        minHeight: '750px',
        margin: '0 auto',
        padding: '1.5em',
        width: '80%',
        background: '#FFFFFF',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
        borderRadius: '4px',
        overflow: 'hidden',
    };
    const addStyle = {
        height: "100px",
        width: "1050px",
        border: "0px solid",
        boxShadow: "rgb(0 0 0 / 30%) 0px 0px 5px",
        padding: "10px",
      };

    let params = useParams();
    
    const [currData,setCurrData] = React.useState(data);
    const [comment, setComment] = React.useState("");
    const [str, setStr] = React.useState(JSON.stringify(currData));

    function handleSubmit(e) {
        e.preventDefault();
        
        const parsedObj = JSON.parse(str);

        parsedObj[params.product_id - 1].comments.push({
            comment_id:data[params.product_id-1].comments.length+1,
            comment_text:comment,
        });

        setCurrData(parsedObj);
        const jsonObj = JSON.stringify(parsedObj);
        setStr(jsonObj);

        localStorage.setItem("dummyProducts", jsonObj);
        //Add code here
        setComment("");
      }

    return (
        <div style={style}>

            <h1>Product {params.product_id} is rendered</h1>
            <Description></Description>
            
            <div style = {{marginTop : '4em'}}><h2>Comments</h2></div>
            <CommentSection product_data = {currData[params.product_id - 1]}></CommentSection>
            <div>
            <form>
                <h1>Add Comments</h1>
                <textarea
                className="input-comment"
                style={addStyle}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button
            className="btn bg-warning butn"
            type="submit"
            style={{ fontSize: "16px", color: "white", marginTop: "10px" }}
            onClick={handleSubmit}
          >
            Add Comment
          </button>
          
            </form>
      </div>
            
        </div>
    );
}

export default Product;