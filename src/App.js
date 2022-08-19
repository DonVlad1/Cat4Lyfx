import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { faker } from '@faker-js/faker';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './Pages/Checkout';
import HappyBuyers from './Pages/HappyBuyers';
import About from './Pages/About';
import Home from './Pages/Home';
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
				const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=9&uniqueitems=true');
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
		<div className="fullContainer">
			<Router>
				{/* <div className="side">
					<p>box</p>
				</div> */}
				<Routes>
					<Route path='/' exact element={<Home cat={cat}/>}/>
					<Route path='/checkout' element={<Checkout />}/>
					<Route path='/About' element={<About/>}/>
					<Route path='/happybuyers' element={<HappyBuyers/>}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
