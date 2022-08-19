import React from 'react'
import { Link } from 'react-router-dom';

function HappyBuyers() {
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
					</Link>
				</div>
			</div>
			<div className="title">
				Happy Buyers
			</div>
		</div>
	</div>
	)
}

export default HappyBuyers