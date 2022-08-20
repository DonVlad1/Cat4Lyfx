import React from 'react';
import CatModal from '../Components/catModalModule';
import Sidebar from '../Components/Sidebar'

function Home({ cat, checkOut, setCheckOut, total, setTotal })
{

    return (
        <div className="container">
            <div className="upper">
                <div className="top">
                    <div className="highZ">
                        <Sidebar checkOut={checkOut} setCheckOut={setCheckOut} total={total} setTotal={setTotal}/>
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
                        <CatModal key={index} total={total} setTotal={setTotal} catList={catList} checkOut={checkOut} setCheckOut={setCheckOut}/>
                    )
                );
            })}
        </div>
    </div>
    )
}

export default Home