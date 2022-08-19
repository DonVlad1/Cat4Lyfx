import React from 'react';
import CatModal from '../Components/catModalModule';
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom';

function Home({ cat, checkOut, setCheckOut })
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
                    </div>
                    <div className="highZ">
                        <Sidebar cat={cat} checkOut={checkOut} setCheckOut={setCheckOut} />
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
                    (catList==="middle message")?(
                        <p key={index} className="middleMessage">SHOP FOR A NEW,<br/><br/>FURRY COMPANION!</p>
                    ):(
                        <CatModal key={index} catList={catList} checkOut={checkOut} setCheckOut={setCheckOut}/>
                    )
                );
            })}
        </div>
    </div>
    )
}

export default Home