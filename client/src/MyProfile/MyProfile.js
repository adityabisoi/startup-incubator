import React, { Fragment, useState, useEffect } from "react";
import "./MyProfile.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
// import { json } from "express/lib/response";

function Register() {
  let history = useNavigate();
  const [placeName,setplaceName]=useState("")
  const [placeEmail,setplaceEmail]=useState("")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      setMessage("Name shouldn't be empty");
    } else if (!email) {
      setMessage("Email shouldn't be empty");
    }
    else {

      //code here
    }
  }
  const handleClick = () => {
    localStorage.removeItem("token");
    history("/login");
  };
  useEffect(()=>{
    fetch('http://localhost:5000/getCurrentUser', {
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    .then(response=>response.json())
    .then(response=>{  
      console.log(response)
      setplaceEmail(response.email)
      setplaceName(response.name)
    });
  },[]);
  async function updateData() {
    const res = await fetch('/updateData', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ email: email, name: name })
    })
    await res.json();
    setName(res.name);
    setEmail(res.email);
  }

  async function updatePassword(){
    if(newPassword !== confirmNewPassword){
      setMessage("Passwords didn't match");
    }else{
      const res = await fetch('/updatePassword',{
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ password:newPassword})
      })
      await res.json();
      if(res===false){
        setMessage("Password can not be changed");
      }
    }
  }

  return (
    <>
      <div className='profile-img'>
        <img src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt='profile' className="imgProfile" />
      </div>
      <div className="data">
        <div className='seperator'>
          <hr />
          <span>Display Name</span>
        </div>
        <form onSubmit={updateData}>
          <div className='form-control'>
            <input
              type='text'
              name='name'
              className='input'
              placeholder={placeName}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <input
              type='email'
              className='input'
              placeholder='Email'
              value={placeEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button color='green' type='submit' className='btn submit-btn'>
            save
          </Button>
        </form>

        <div className='seperator'>
          <hr />
          <span>Change password</span>
        </div>
        <form onSubmit={updatePassword}>
          <div className='form-control'>
            <input
              type='password'
              className='input'
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <input
              type='password'
              className='input'
              placeholder='Confirm New Password'
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
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
            <Link to='/MyProducts' style={{ color: "white" }}>
              Products
            </Link>
          </Button>
        </div>
        <div className='btn-container' style={{ marginTop: '10px' }}>
          <Button
            color='red' type='submit' className='btn submit-btn'
            onClick={handleClick}
          >
            Logout
          </Button>

        </div>
      </div>
    </>
  );
}

export default Register;
