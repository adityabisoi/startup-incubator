import React, { Fragment, useState } from "react";
import "./Login.css";
import Loader from "../Components/Loader/Loader";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword,setconfirmPassword] = useState("")
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      setMessage("Email shouldn't be empty");
    } 
    else if (!password) {
      setMessage("Password shouldn't be empty");
    } 
    else if(password != confirmpassword) {
      setMessage("Password and Confirm password dont match")
    }
    else {
      // handle login with server and setMessage accordingly
      setMessage("Login successful");
    }

    setLoading(false);
  }

  return (
    <Fragment>
      <form className="login_form" onSubmit={handleSubmit}>
        <h1 className="login_heading">Login</h1>

        <div className="input_element">
          <MailIcon />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="on"
          />
        </div>

        <div className="input_element">
          <LockIcon />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        
        <div className="input_element">
          <LockIcon />
          <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit">Login</button>
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

export default Login;
