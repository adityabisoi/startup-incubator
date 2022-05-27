import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import Fancy from "./Fancy";
import "./Navbar.css";

import {Image} from "semantic-ui-react";

const Navbar = (props) => {
  let id = localStorage.getItem('token')
  const [startflag, setflag] = useState(false);
  let history = useNavigate();
  //To hide navbar when scroll
  useEffect(() => {
    let x = window.scrollY;
    window.addEventListener("scroll", () => {
      if (x < window.scrollY) {
        setflag(true);
      } else {
        setflag(false);
      }
      x = window.scrollY;
    });
  });
  return (
    <>
      <Fancy
        text={"Start your own startup with us lets reach heights together !"}
      />
      <div className="wrapper">
        <nav className={`main-nav ${startflag ? "isActive" : ""}`}>
          <div className="logo">
            <img id="mainLogo" src={props.logo} className="logo" alt="id"></img>
          </div>
          {/*rest buttons */}
          <Link to="/">
            <div className="Sol">
              <div className="bar">Home</div>
            </div>
          </Link>
          {localStorage.getItem("token") && (
            <Link to="/new-product">
              <div className="Sol">
                <div className="bar">New Product</div>
              </div>
            </Link>
          )}
          {localStorage.getItem("token") && (
            <Link to="/MyProducts">
              <div className="Sol">
                <div className="bar">My Products</div>
              </div>
            </Link>
          )}
          <div className="Int">
            <div className="bar">Integrations</div>
          </div>
          <div className="Res">
            <div className="bar">Resources</div>
          </div>
          <Link to="/aboutus">
            <div className="Abt">
              <div className="bar"> About us</div>
            </div>
          </Link>
          {!localStorage.getItem("token") ? (
            <>
              <Link to="/signup">
                <Button color={"blue"} text={"SignUp"} />
              </Link>
              <Link to="/login">
                <Button color={"white"} text={"Log In"} />
              </Link>
            </>
          ) : (
            <Link to='/MyProfile/{id}' className="profile-btn">
              <Image
                src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                alt="profile"
                size='mini'
                className="imgProfile"
              />
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};
export default Navbar;
