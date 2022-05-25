import React, { Fragment, useState } from "react";
import "./CreateProduct.css";
import ProductItem from "./ProductItem";

function MyProducts() {
  const initialProject = []
  const [project, setProject] = useState(initialProject)
  

  const deleteProject = async (id) => {
    const response = await fetch('http://localhost:5000/deleteProject/'+id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });
    
    const newProject=project.filter((item)=>{
           return item._id !== id
    })
    setProject(newProject)
    getProjects()
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
    setProject(json)
  }
  if(project===initialProject) {
    getProjects()
  }
  
  
  return (
    <>
       <div className="row my-3">
        {project.map((note) => {
          return (<ProductItem note={note} deleteProject={deleteProject} />)
        })}
      </div>
    </>
  );
}

export default MyProducts;