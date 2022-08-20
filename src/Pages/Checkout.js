import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import * as TbIcons from "react-icons/tb";
import styled from 'styled-components';

function Checkout({ checkOut, setCheckOut, total, setTotal}) {
	function removeItem (index) {
        for (let i = 0; i < checkOut.length; i++) {
            if(checkOut[i].catId === index.catId){
                let removeCatFromCart = [...checkOut];
                removeCatFromCart.splice(i, 1)
                setCheckOut(removeCatFromCart)
            } 
        }    
    }

	useEffect(()=> {
        // console.log(checkOut[0].catPrice)
        let sum = 0
        for (let i = 0; i < checkOut.length; i++){
            sum += Number(checkOut[i].catPrice)
        }
        setTotal(sum.toFixed(2))
    }, [checkOut,setTotal])

	return (
	<div className="container">
		<div className="upper">
			<div className="top">
				<div className="nav">
				<Link to="/">
					<button>Home</button>
				</Link>
				<Link to="/about">
					<button>About</button>
				</Link>
				<Link to="/happybuyers">
					<button>Happy Buyers</button>
				</Link>
				</div>
				<div>
					<Link to="/">
						<button className="basket fixMeDaddy">Back</button>
					</Link>
				</div>
			</div>
			<div className="title">
				Checkout
			</div>
		</div>
		
		<SpecialDiv >
			{/* <h1>{checkOut[0].catName}</h1> */}
			<ArrayDiv>			
				{checkOut.map((checkOutList, index) =>{
				return (
					<div className="polaroidStyle2" key={index}>
						<img  src={checkOutList.catImage} className="wheelImages" alt='cat'/>
						<p className="caption">{checkOutList.catName}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;£{checkOutList.catPrice}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<TbIcons.TbTrashX className='trashIcon' onClick={()=>removeItem(checkOutList, index)} /></p>
					</div>
					);
				})}
			</ArrayDiv>
			<div>
				<button>Buy</button>
				<p className="runningTotal">£{total}</p>
			</div>
		</SpecialDiv>
	</div>
  )
}

export default Checkout

const SpecialDiv = styled.div`
	margin-top: 1em;
    margin-bottom: 1em;
    padding-top: 2em;
    max-width: 90vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
	background-color: aqua;
	/* display: flex;
	justify-content: center;
	flex-direction: column;
	width: 80vw;
	max-height: 70vh;
	color: black;
	background-color: black;
	opacity: 0.9;
	border: 1px solid blueviolet;
	align-items: center;
	color: white; */
`
const ArrayDiv = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	height: 70vh;
	border: 1px solid green;
`
