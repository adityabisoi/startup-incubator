import React, { Fragment, useState } from "react";
import "./Login.css";
import Loader from "../Components/Loader/Loader";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

function Login() {
  //   const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [credentials, setcredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setcredentials(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!credentials.email) {
      setMessage("Email shouldn't be empty");
    } else if (!credentials.password) {
      setMessage("Password shouldn't be empty");
    } else {
      const response = await fetch('http://localhost:5000/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });
      const json = await response.json();
      console.log(json)
      if (json === false) {
        setMessage("Invalid Credentials!!");
      } else {
        setMessage("Login Successfull!!");
        //history('/')
      }
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
            name="email"
            value={credentials.email}
            onChange={onChange}
            placeholder="Email"
            autoComplete="on"
          />
        </div>

        <div className="input_element">
          <LockIcon />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            placeholder="Password"
          />
        </div>

        <button type="submit">Login</button>
        <Link to="/signup" className="registerlink">
          Create a new account?
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

export default Login;
