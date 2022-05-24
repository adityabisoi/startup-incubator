import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import Fancy from './Fancy';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = (props) => {
  const [startflag, setflag] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  let history = useNavigate();
  //To hide navbar when scroll
  const handleclick = () => {
    localStorage.removeItem("token");
    history("/login");
  };

  const handleToggleNav = ()=> {
    setOpenNav(!openNav)
  }

  useEffect(() => {
    
    if(openNav){
      setflag(false);
      window.addEventListener("resize", ()=>{
        if(window.innerWidth > 840){
          setOpenNav(false)
        }
      })
    }else{
      let x = window.scrollY;
      window.addEventListener("scroll", () => {
        if (x < window.scrollY) {
          setflag(true);
        } else {
            setflag(false);
        }
        x = window.scrollY;
      });
    }
  });

  return (
    <>
      <Fancy
        text={"Start your own startup with us lets reach heights together !"}
      />
      <div className="nav-wrapper">
        <nav className={`main-nav ${startflag ? "isActive" : ""}`}>
          <div className="logo">
            <img id="mainLogo" src={props.logo} className="logo" alt="id"></img>
          </div>
          {/*rest buttons */}
          <div className="nav-items">
            <div className="nav-links-wrapper">
              <ul className="nav-links">
                <li><Link to="/" className="link">Home</Link></li>
                {localStorage.getItem("token") && (
                <Link to="/new-product" className="link">New Product</Link>
                )}
                <li><Link to="" className="link">Integrations</Link></li>
                <li><Link to="" className="link">Resources</Link></li>
                <li><Link to="" className="link">About us</Link></li>
              </ul>
            </div> 
            {!localStorage.getItem("token") ? (
              <>
              <div className="sign-link">
                <Link to="/signup">
                  <Button color={"blue"} text={"SignUp"} />
                </Link>
              </div>
              <div className="sign-link">
                <Link to="/login">
                  <Button color={"white"} text={"Log In"} />
                </Link>
              </div>
              </>
            ) : (
              <div className="abc">
                <button className="btn btn-primary" onClick={handleclick}>
                  Logout
                </button>
              </div>
            )}
          </div>
          <div className="toggle-menu">
          {
            !openNav ?
            <MenuIcon className="menu" onClick={handleToggleNav} />
            :
            <CloseIcon className="menu" onClick={handleToggleNav} />
          }
          </div>
          {/* mobile nav */}
          <div className={`toggle-nav ${openNav && "open"}`}>
            <ul className={`toggle-nav-link ${openNav && "open"}`}>
                <li><Link to="/" className="link">Home</Link></li>
                {localStorage.getItem("token") && (
                <Link to="/new-product" className="link">New Product</Link>
                )}
                <li><Link to="/" className="link">Integrations</Link></li>
                <li><Link to="/" className="link">Resources</Link></li>
                <li><Link to="/" className="link">About us</Link></li>
            </ul>
            <div className={`toggle-login ${openNav && "open"}`}>
            {!localStorage.getItem("token") ? (
              <>
              <div className="sign-link">
                <Link to="/signup" >
                  <Button color={"blue"} text={"SignUp"} />
                </Link>
              </div>
              <div className="sign-link">
                <Link to="/login">
                  <Button color={"white"} text={"Log In"} />
                </Link>
              </div>
              </>
            ) : (
              <div className="abc">
                <button className="btn btn-primary" onClick={handleclick}>
                  Logout
                </button>
              </div>
            )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
