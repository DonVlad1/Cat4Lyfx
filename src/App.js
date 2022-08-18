import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components'
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
				console.log(data)
				setCat(data);
			} catch (error)
			{
				setErrorMsg('Oops, something went wrong...');
				console.log(error.message);
			}
		};
		fetchCat();
	}, [])

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