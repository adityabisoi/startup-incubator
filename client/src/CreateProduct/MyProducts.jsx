import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';
import './CreateProduct.css';
import ProductItem from './ProductItem';
function MyProducts() {
	const initialProject = [];
	const [project, setProject] = useState(initialProject);

	const deleteProject = async (id) => {
		const response = await fetch(
			'http://localhost:5000/deleteProject/' + id,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					'auth-token': localStorage.getItem('token'),
				},
			},
		);

		const newProject = project.filter((item) => {
			return item._id !== id;
		});
		setProject(newProject);
		getProjects();
	};

	const getProjects = async () => {
		const response = await fetch('http://localhost:5000/getProject', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'auth-token': localStorage.getItem('token'),
			},
		});
		const json = await response.json();
		setProject(json);
	};
	if (project === initialProject) {
		getProjects();
	}

	return (
		<>
			{project.length ? (
				<Grid
					style={{
						justifyContent: 'center',
						margin: '50px',
						margiTop: '0px',
					}}
				>
					{project.map((note) => {
						return (
							<ProductItem
								note={note}
								deleteProject={deleteProject}
							/>
						);
					})}
				</Grid>
			) : (
				<h1
					style={{
						display: 'flex',
						justifyContent: 'center',
						textAlign: 'center',
					}}
				>
					☹️ There are no products created by you !!
				</h1>
			)}
			<Link to='/new-product'>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Button positive> + New Product </Button>
				</div>
			</Link>
		</>
	);
}

export default MyProducts;
