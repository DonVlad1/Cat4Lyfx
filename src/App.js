import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
// import styled from 'styled-components'
import { faker } from '@faker-js/faker'
import './App.css';
Modal.setAppElement('#root');

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

const App = () =>
{
	const [errorMsg, setErrorMsg] = useState('');
	const [cat, setCat] = useState([]);
	const [faker, setFaker] = useState([])

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
					<AnimeModal key={index} catList={catList}>

					</AnimeModal>
					// console.log(animeList.url)
				);
			})}
		</div >
	);
}




const AnimeModal = ({ catList }) =>
{
	const [animeStateModal, showAnimeStateModal] = useState(false)

	function openModal()
	{
		showAnimeStateModal(true);
	}

	function closeModal()
	{
		showAnimeStateModal(false);
	}

	return (
		<div class="animeImages">
			<img onClick={openModal} src={catList.url} />
			<Modal isOpen={animeStateModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
				<img onClick={"buyCat"} src={catList.url} alt="anime" />
				<button onClick={"addToCarCatFunction"}>Add To Cart</button>
				<p>{faker.name.firstName()}</p>
				<p>{faker.phone.phoneNumber()}</p>
				<p>£{Math.ceil(faker.datatype.number() / 100)}</p>
			</Modal>
		</div>
	)
}

export default App;





// 	const [anime, setAnime] = useState([]);

// 	useEffect(() =>
// 	{
// 		const fetchData = async () =>
// 		{
// 			try
// 			{
// 				setErrorMsg('');
// 				const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
// 				if (!response.ok)
// 				{
// 					throw new Error(response.statusText);
// 				}
// 				const data = await response.json();
// 				console.log(response)
// 				console.log(data)
// 				setAnime(data.data);
// 			} catch (error)
// 			{
// 				setErrorMsg('Oops, something went wrong...');
// 				console.log(error.message);
// 			}
// 		};
// 		fetchData();
// 	}, [])

// 	return (
// 		<div class="imageContainer">
// 			{anime.map((animeList, index) =>
// 			{
// 				return (
// 					<AnimeModal key={index} animeList={animeList}>

// 					</AnimeModal>
// 				);
// 			})}
// 		</div >
// 	);
// };

// const AnimeModal = ({ animeList }) =>
// {
// 	const [animeStateModal, showAnimeStateModal] = useState(false)

// 	function openModal()
// 	{
// 		showAnimeStateModal(true);
// 	}

// 	function closeModal()
// 	{
// 		showAnimeStateModal(false);
// 	}

// 	return (
// 		<div class="animeImages">
// 			<p onClick={openModal}>{animeList.anime_name}</p>
// 			<Modal isOpen={animeStateModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
// 				<img src={animeList.anime_img} alt="anime" />
// 				<p>{animeList.anime_name}</p>
// 				<p>{animeList.anime_id}</p>
// 			</Modal>
// 		</div>
// 	)