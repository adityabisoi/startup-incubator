import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

const Headers = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
                        <img src="Images/icon.jpg" alt="" width="150" height="150" className="d-inline-block align-text-top" />
                    </a>
                    <div>
                        <a href='/'><button className="btn bg-danger butn" type="submit" style={{marginRight:'10px',color:"white"}}>Home</button></a>
                        <a href='/new-product'><button className="btn bg-success butn" type="submit" style={{marginRight:'10px',color:"white"}}>New Product</button></a>
                        <a href='/login'><button className="btn bg-warning butn" type="submit" style={{marginRight:'10px',color:"white"}}>Login</button></a>
                        <a href='/signUp'><button className="btn bg-info butn" type="submit" style={{marginRight:'10px',color:"white"}}>SignUp</button></a>
                    </div>
                </div>
            </nav>
        </>


    )
}

export default Headers



