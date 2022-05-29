import React,{useEffect} from 'react';
import { useParams} from 'react-router-dom';
import Description from './Description';
import CommentSection from './CommentSection';
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
    const style = {
        minHeight: '750px',
        margin: '20px auto',
        padding: '1.5em',
        width: '80%',
        background: '#FFFFFF',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
        borderRadius: '4px',
        overflow: 'hidden',
    };
    const addStyle = {
        height: "100px",
        width: "100%",
        border: "0px solid",
        boxShadow: "rgb(0 0 0 / 30%) 0px 0px 5px",
        padding: "10px",
      };

    let params = useParams();
    
    const [product,setProduct] = React.useState({});
    const [newComment, setNewComment] = React.useState("");
    const [comments,setComments] = React.useState([]);

    useEffect(()=>{
      fetch(`/getSpecificProject/${params.product_id}`,{
        method:'GET',
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(response=>response.json())
      .then(response=>{  
        setProduct(response);
        setComments(response.comments);
      });
    },[]);

    async function handleSubmit(e) {
        const res = await fetch(`/addComments/${params.product_id}`,{
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'auth-token':localStorage.getItem('token')
          },
          body: JSON.stringify({newComment:newComment})
        })

        e.preventDefault();
        
        
        //Add code here
      }
      console.log(comments);
    return (
        <div style={style}>

            <h1>Product {product.title} is rendered</h1>
            <Description></Description>
            
            <div style = {{marginTop : '4em'}}><h2>Comments</h2></div>
            <CommentSection comments = {comments}></CommentSection>
            <div>
            <form>
                <h1>Add Comments</h1>
                <textarea
                className="input-comment"
                style={addStyle}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
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