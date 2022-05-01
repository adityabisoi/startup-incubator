import React, { Fragment, useState } from "react";
import "./Register.css";
import Loader from "../Components/Loader/Loader";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setisLoading(true);

    if (!name) {
      setMessage("Name shouldn't be empty");
    } else if (!email) {
      setMessage("Email shouldn't be empty");
    } else if (!password) {
      setMessage("Password shouldn't be empty");
    } else if (!confirmpassword) {
      setMessage("Confirm Password shouldn't be empty");
    } else if (password !== confirmpassword) {
      setMessage("Password and Confirm password do not match");
    } else {
      const response = await fetch('http://localhost:5000/registerUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({ name: name, email: email, password: password })
      });
      const json = await response.json();
      console.log(json)
      if (json === false) {
        setMessage("Invalid Credentials!!");
      } else {
        setMessage("Registration Successfull!!");
        //history('/')
      }
    }
    
  

  setisLoading(false);
}

return (
  <Fragment>
    <form className="register_form" onSubmit={handleSubmit}>
      <h1 className="register_heading">Sign Up</h1>

      <div className="input_element">
        <PersonIcon />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </div>

      <div className="input_element">
        <MailIcon />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>

      <div className="input_element">
        <LockIcon />
        <input
          type={isPasswordVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
          {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </div>
      </div>
      <div className="input_element">
        <LockIcon />
        <input
          type={isConfirmPasswordVisible ? "text" : "password"}
          value={confirmpassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <div
          onClick={() =>
            setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
          }
        >
          {isConfirmPasswordVisible ? (
            <VisibilityIcon />
          ) : (
            <VisibilityOffIcon />
          )}
        </div>
      </div>

      <button type="submit">Register</button>
      <Link to="/login" className="registerlink">
        Already registerted?
      </Link>
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
);
}

export default Register;
