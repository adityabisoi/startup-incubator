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
                        <button className="btn bg-success butn" type="submit" style={{marginRight:'10px'}}>New Product</button>
                        <button className="btn bg-warning butn" type="submit" style={{marginRight:'10px'}}>Login</button>
                        <button className="btn bg-info butn" type="submit">SignUp</button>
                    </div>

                </div>
            </nav>
        </>


    )
}

export default Headers