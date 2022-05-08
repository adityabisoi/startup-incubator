import React ,{useEffect,useState} from 'react';
import './Navbar.css';
import Button from "./Button";
import { Link } from "react-router-dom";
import Fancy from "./Fancy";

 const Navbar = (props)=>{
        const[startflag,setflag] = useState(false);

        //To hide navbar when scroll
        useEffect(()=>{
            let x= window.scrollY;
            window.addEventListener('scroll',( )=>{
                if(x<window.scrollY){
                    setflag(true);
                }
                else{
                    setflag(false);
                }
                x = window.scrollY;

            });
        },);
        return(
            <>
                <Fancy  text={"Start your own startup with us lets reach heights together !"}/>
                <div className='wrapper'>
                    <nav className={`main-nav ${startflag?"isActive":""}`}>
                            <div className='logo'>
                                <img id = "mainLogo" src = {props.logo} className = "logo" alt='id'></img>
                            </div>
                            {/*rest buttons */}
                            <Link to="/new-product">
                                <div className='Sol'>
                                    <div className='bar'>New Product</div>
                                </div>  
                            </Link>
                            <div className='Int'>
                                <div className='bar'>Integrations</div>
                            </div>
                            <div className='Res'>
                                <div className='bar'>Resources</div>
                            </div>
                            <div className='Abt'>
                                <div className='bar'> About us</div>
                            </div>

                            <Link to="/signup">
                                <Button color={'blue'} text={'SignUp'}/>
                            </Link>
                            <Link to="/login">
                                <Button color={'white'} text={"Log In"}/>
                            </Link>
                    </nav>
                </div>
            </>
        );
    }
    export default Navbar;
