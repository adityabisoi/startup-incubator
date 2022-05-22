import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import Fancy from './Fancy';
import './Navbar.css';

const Navbar = (props) => {
	const [startflag, setflag] = useState(false);
	let history = useNavigate();
	//To hide navbar when scroll
	const handleclick = () => {
		localStorage.removeItem('token');
		history('/login');
	};
	useEffect(() => {
		let x = window.scrollY;
		window.addEventListener('scroll', () => {
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
				text={
					'Start your own startup with us lets reach heights together !'
				}
			/>
			<div className='wrapper'>
				<nav className={`main-nav ${startflag ? 'isActive' : ''}`}>
					<div className='logo'>
						<img
							id='mainLogo'
							src={props.logo}
							className='logo'
							alt='id'
						></img>
					</div>
					{/*rest buttons */}
					<Link to='/'>
						<div className='Sol'>
							<div className='bar'>Home</div>
						</div>
					</Link>
					{localStorage.getItem('token') && (
						<Link to='/new-product'>
							<div className='Sol'>
								<div className='bar'>New Product</div>
							</div>
						</Link>
					)}
					<div className='Int'>
						<div className='bar'>Integrations</div>
					</div>
					<div className='Res'>
						<div className='bar'>Resources</div>
					</div>
					<Link to='/aboutus'>
						<div className='Abt'>
							<div className='bar'> About us</div>
						</div>
					</Link>
					{!localStorage.getItem('token') ? (
						<>
							<Link to='/signup'>
								<Button color={'blue'} text={'SignUp'} />
							</Link>
							<Link to='/login'>
								<Button color={'white'} text={'Log In'} />
							</Link>
						</>
					) : (
						<div className='abc'>
							<button
								className='btn btn-primary'
								onClick={handleclick}
							>
								Logout
							</button>
						</div>
					)}
				</nav>
			</div>
		</>
	);
};
export default Navbar;
