import React, { Fragment, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./CreateProduct.css";
import Loader from "../Components/Loader/Loader";
import TitleIcon from "@mui/icons-material/Title";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import CloseIcon from "@mui/icons-material/Close";
import validator from 'validator'

function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [message, setMessage] = useState("");
  let history = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);

    if (!title) {
      setMessage("Please enter title of the product");
    } else if (!description) {
      setMessage("Please enter description of the product");
    } else if (!imageUrl) {
      setMessage("Please enter image url of the product");
    } else if(!(validator.isURL(imageUrl))) {
      setMessage("Invalid image url");
    }
    else {
      const response = await fetch('http://localhost:5000/createProject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title: title, description: description, imageUrl: imageUrl })
      });
      // eslint-disable-next-line no-unused-vars
      const json = await response.json();
      console.log(json);
      if (json === false) {
        history('/login');
      }
      else {
        
         setTitle("");
         setImageUrl("");
         setDescription("");
         setMessage("Product added successfully!!");
        //  <Link to="/MyProducts"></Link>
      }
    }
    setisLoading(false);
  }

  return (
    <>
      <Fragment>
        <form className="create_product_form" onSubmit={handleSubmit}>

          <h1>Enter Product Details</h1>
          <div className="create_input_element">
            <TitleIcon />
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="create_input_element">
            <DescriptionIcon />
            <textarea
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="create_input_element">
            <ImageIcon />
            <input
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        <div className="message_container">
          {isLoading && <Loader />}

          {message && (
            <div className="message">
              {message}
              <CloseIcon className="close" onClick={() => setMessage("")} />
            </div>
          )}
        </div>
      </Fragment>
    </>
  );
}

export default CreateProduct;
