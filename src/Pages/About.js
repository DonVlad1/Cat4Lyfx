import React from 'react'
import { Link } from 'react-router-dom';

function About({ checkOut, setChe })
{

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
						<Link to="/checkout">
							<button>View Basket</button>
							{console.log(checkOut)}
						</Link>
					</div>
					<div>
					</div>
				</div>
				<div className="title">
					About
				</div>
			</div>
		</div>
	)
}

export default About