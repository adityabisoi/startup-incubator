import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Item } from 'semantic-ui-react';
import aboutus from '../assets/startuplife-amico.png';
import './AboutusPage.css';
export default function Aboutus() {
	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<Item>
						<img src={aboutus} width='800px' alt='aboutus' />
					</Item>
				</Grid>
				<Grid item xs={12} md={6}>
					<Item>
						<Typography
							className='heading'
							variant='h2'
							component='h2'
						>
							About Us
						</Typography>
						;
					</Item>
					<Item>
						<Typography
							className='explanation'
							variant='h5'
							gutterBottom
						>
							If you can <span className='dream'>DREAM</span> it
							you can do it ~ Walt Disney
						</Typography>
					</Item>
					<Item>
						<Typography
							className='explanation'
							variant='h5'
							gutterBottom
						>
							We are the platform that values your startup ideas
							and helps them reach the world! Get to know what
							people think about your product by getting an early
							feedback from them ! A platform where anyone can be
							a part of the startup ecosystem. Just post your
							startup idea or products pre release and get early
							feedback from the people who are interested in your
							idea. . You are just one tap away from being a part
							of something great ! Enhance your startup with us.
						</Typography>
					</Item>
					<Item>
						<Typography
							className='explanation'
							variant='h5'
							gutterBottom
						>
							Just post your startup idea or products pre release
							and get early feedback from the people who are
							interested in your idea. . You can not only post
							ideas but also uplift other startups by giving your
							feedback ! Every feedback is valued ! You are just
							one tap away from being a part of something great !
							Enhance your startup with us and{' '}
							<span className='dream'>
								MAKE YOUR IDEAS A REALITY!!
							</span>
						</Typography>
					</Item>
				</Grid>
			</Grid>
		</>
	);
}
