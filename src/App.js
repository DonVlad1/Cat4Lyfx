import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { faker } from '@faker-js/faker';
// import styled from 'styled-components'
import './App.css';
import CatModal from './Components/catModalModule'
Modal.setAppElement('#root');



const App = () =>
{
	const [errorMsg, setErrorMsg] = useState('');
	const [cat, setCat] = useState([]);

	useEffect(() =>
	{
		const fetchCat = async () => 
		{
			try
			{
				setErrorMsg('');
				const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
				if (!response.ok)
				{
					throw new Error(response.statusText);
				}
				const data = await response.json();

				const catDetails = data.map((catEntry) =>
				{
					return {
						catImage: catEntry.url,
						catName: faker.name.firstName(),
						catPhone: faker.phone.number(),
						catPrice: Math.ceil(faker.datatype.number() / 100)
					}
				})

				console.log(catDetails)
				setCat(catDetails);
			} catch (error)
			{
				setErrorMsg('Oops, something went wrong...');
				console.log(error.message);
			}
		};
		fetchCat();
	}, [])

	// display error message to user if something went wrong
	if (errorMsg !== '')
	{
		return <h1>{errorMsg}</h1>
	}

	return (
		<div class="imageContainer">
			{cat.map((catList, index) =>
			{
				return (
					<CatModal key={index} catList={catList}>

					</CatModal>
				);
			})}
		</div >
	);
}



export default App;