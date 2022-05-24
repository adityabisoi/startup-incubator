import React, { Fragment, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./CreateProduct.css";
import Loader from "../Components/Loader/Loader";
import TitleIcon from "@mui/icons-material/Title";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import CloseIcon from "@mui/icons-material/Close";
import ProductItem from "./ProductItem";

function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [message, setMessage] = useState("");
  let history = useNavigate();



  const initialProject = []
  const [project, setProject] = useState(initialProject)


  const deleteProject = async (id) => {
    const response = await fetch('http://localhost:5000/deleteProject/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json()
    console.log(json);
    const newProject=project.filter((item)=>{
           return item.user !== id
    })
    setProject(newProject)

  }


  const getProjects = async () => {
    const response = await fetch('http://localhost:5000/getProject', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    const json = await response.json();
    console.log(json)
    setProject(json)
  }

  // const [note, setNote] = useState({user:"", title: "", description: "", imageUrl: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);

    if (!title) {
      setMessage("Please enter title of the product");
    } else if (!description) {
      setMessage("Please enter description of the product");
    } else if (!imageUrl) {
      setMessage("Please enter image url of the product");
    } else {
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
        getProjects();
      }
      // const dummyProducts = JSON.parse(localStorage.getItem("dummyProducts"));
      // const newProduct = {
      //   comment: [],
      //   id: dummyProducts.length + 1,
      //   heading: title,
      //   description: description,
      //   likes: 0,
      //   imagePath: imageUrl,
      // };
      // dummyProducts.push(newProduct);
      // const newData = JSON.stringify(dummyProducts);
      // localStorage.setItem("dummyProducts", newData);
      // setMessage("Created New Product");
    }

    setisLoading(false);
  }

  return (
    <>
      <Fragment>
        <form className="create_product_form" onSubmit={handleSubmit}>

          <h1>Enter Product Details</h1>
          <div className="input_element">
            <TitleIcon />
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input_element">
            <DescriptionIcon />
            <textarea
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="input_element">
            <ImageIcon />
            <input
              type="text"
              placeholder="Image URL"
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
      <div className="row my-3">
        {project.map((note) => {
          return (<ProductItem note={note} deleteProject={deleteProject} />)
        })}
      </div>
    </>
  );
}

export default CreateProduct;
