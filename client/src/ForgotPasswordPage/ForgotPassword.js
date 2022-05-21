import React, { Fragment, useState } from "react";
import Loader from "../Components/Loader/Loader";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      setMessage("Email shouldn't be empty");
    } else {
      fetch("/reset-password",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email
        })
      }).then(res=>res.json())
      .then(data=>{
        console.log(data);
        setMessage("Please check your email");
      }).catch(e=>{
        setMessage(e.message);
      })
    }

    setLoading(false);
  }

  return (
    <Fragment>
      <form className="forgotPassword_form" onSubmit={handleSubmit}>
        <h1 className="forgotPassword_heading">Forgot Password</h1>

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
  );
}

export default ForgotPassword;
