import React, { Fragment, useState } from "react";
import "./MyProfile.css";
import { Link,useNavigate } from "react-router-dom";
import {Button} from "semantic-ui-react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactNo,setContactNo] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      setMessage("Name shouldn't be empty");
    } else if (!email) {
      setMessage("Email shouldn't be empty");
    } 
    else
    {
        //code here
    }
}

return (
    <>
      <div className='profile-img'>
        <img src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt='profile' />
      </div>
      <div className="data">
      <div className='seperator'>
        <hr />
        <span>Display Name</span>
      </div>
      <form >
        <div className='form-control'>
          <input
            type='text'
            name='name'
            className='input'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <input
            type='email'
            className='input'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <input
            type='number'
            className='input'
            placeholder='Contact No'
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
        </div>
        <Button color='green' type='submit' className='btn submit-btn'>
          save
        </Button>
      </form>
      
      <div className='seperator'>
        <hr />
      </div>
      <div className='btn-container'>
      <Button color='yellow' type='submit' className='btn submit-btn'>
        <Link to='/MyProducts' style={{color:"white"}}>
          Products
        </Link>
        </Button>
        </div>
        <div className='btn-container' style={{marginTop: '10px'}}>
        <Button
          color='red' type='submit' className='btn submit-btn'
          onClick={() => {
          }}
        >
          Logout
        </Button>
        
      </div>
      </div>
    </>
  );
}

export default Register;
