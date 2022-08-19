import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { faker } from '@faker-js/faker';
import './App.css';
import CatModal from './Components/catModalModule';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
				<div className="container">
					<div className="upper">
						<div className="top">
							<div className="nav">
								<button>About</button>
								<button>Happy Buyers</button>
							</div>
							<div>
								<Sidebar />
							</div>
						</div>
						<div className="title">
							CATS4LYF
						</div>
					</div>
					<div className="wheel">
						{cat.map((catList, index) =>
						{
							return (
								<CatModal key={index} catList={catList}/>
							);
						})}
					</div>
				</div>


				{/* <div className="side">
					<p>box</p>
				</div> */}
				<Routes>
					<Route path='/'/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
