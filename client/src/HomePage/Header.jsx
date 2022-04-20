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
                        <a href='/new-product'><button className="btn bg-success butn" type="submit" style={{marginRight:'10px'}}>New Product</button></a>
                        <a href='/login'><button className="btn bg-warning butn" type="submit" style={{marginRight:'10px'}}>Login</button></a>
                        <a href='/signUp'><button className="btn bg-info butn" type="submit">SignUp</button></a>
                    </div>
                </div>
            </nav>
        </>


    )
}

export default Headers



