import React, { Fragment, useState } from "react";
import Loader from "../Components/Loader/Loader";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "./ResetPassword.css";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =useState(false);
  let params = useParams();
  let history = useNavigate('/login');

  async function handleSubmit(e) {
    e.preventDefault();
    setisLoading(true);

    console.log(params.id)
    if (!password) {
      setMessage("Password shouldn't be empty");
    } else if (!confirmpassword) {
      setMessage("Confirm Password shouldn't be empty");
    } else if (password !== confirmpassword) {
      setMessage("Password and Confirm password do not match");
    } else {
      const token = params.token;
      fetch('/change-password', {
        method: 'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token:token,
          password:password
        })
      }).then(res=>res.json())
      .then(data=>{
        console.log(data);
        setMessage("Password Changed Successfully");
        history('/login')
      }).catch(e=>{
        setMessage(e.message);
      })
      //code here
    }
    

  setisLoading(false);
}

return (
  <Fragment>
    <form className="reset_form" onSubmit={handleSubmit}>
      <h1 className="reset_heading">Reset Password</h1>

      <div className="input_element">
        <LockIcon />
        <input
          type={isPasswordVisible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
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
          placeholder="Confirm New Password"
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

      <button type="submit">Change Password</button>
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

export default ResetPassword;
