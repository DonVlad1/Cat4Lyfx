import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { faker } from '@faker-js/faker';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Pages/Checkout';
import Home from './Pages/Home';

Modal.setAppElement('#root');



const App = () =>
{
	const [errorMsg, setErrorMsg] = useState('');
	const [cat, setCat] = useState([]);
	const [checkOut, setCheckOut] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() =>
	{
		const fetchCat = async () => 
		{
			try
			{
				setErrorMsg('');
				const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=8&uniqueitems=true');
				if (!response.ok)
				{
					throw new Error(response.statusText);
				}
				const data = await response.json();

				const catDetails = data.map((catEntry, index) =>
				{
					return {
						catId: index,
						catImage: catEntry.url,
						catName: faker.name.firstName(),
						catPhone: faker.phone.number(),
						catPrice: Math.ceil(faker.datatype.number() / 100)
					}
				})
				catDetails.splice(4, 0, "middle message")
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
		<div className="fullContainer">
			<Router>
				<Routes>
					<Route path='/' exact element={<Home cat={cat} total={total} setTotal={setTotal} checkOut={checkOut} setCheckOut={setCheckOut} />} />
					<Route path='/checkout' element={<Checkout total={total} setTotal={setTotal} checkOut={checkOut} setCheckOut={setCheckOut} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
