import React, { useState } from 'react';
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';

import "./Sidebar.css"



function Sidebar({checkOut, setCheckOut}) {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)


    return (
    <>  


        <div className={sidebar ? 'sideBar active sideBarOpen' : 'sideBar'}>
            <Link to="#" className='menu-bars'>
                <button className="basket" onClick={showSidebar}>
                    <BasketDiv>
                        Checkout Basket&nbsp;&nbsp;
                        <AiIcons.AiOutlineShoppingCart className='cart-icon'/>
                    </BasketDiv>
                </button>
            </Link>
            <nav className='side-menu'>
                <ul className='side-menu-items'>
                    <li className='sidebar-toggle'>
                        <Link to="#" className='menu-bars'>
                            
                        </Link>
                    </li>
                        {/* new checkout button */}
                        <div>
                            <Link to="/checkout">
                                <button>Checkout</button>
                                <img className='image' src={checkOut.catImage} />
                                <div>
                                    {checkOut.map((checkOutList, checkIndex) =>
                                    {
                                        console.log(checkOut)
                                        return (
                                            <img src={checkOutList.catImage} />
                                        );
                                    })}
                                </div>
                            </Link>
                        </div>
                </ul>
            </nav>
        </div>
    </>
    )
}

export default Sidebar

const BasketDiv = styled.div`
    display: flex;
    align-items: center;

`