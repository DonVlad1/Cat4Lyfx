import React, { useState } from 'react';
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
// import SideBarCheckout from './SideBarCheckout';

import "./Sidebar.css"



function Sidebar({ checkOut, setCheckOut })
{
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)


    return (
        <>
        <div className={sidebar ? 'fixMeDaddy somethingElse' : 'fixMeDaddy'}>
            <button className="basket" onClick={showSidebar}>
                        <BasketDiv>
                            Checkout Basket&nbsp;&nbsp;
                            <AiIcons.AiOutlineShoppingCart className='cart-icon'/>
                        </BasketDiv>
            </button>
        </div>
        <div className={sidebar ? 'sideBar active' : 'sideBar'}>
            <nav className='side-menu'>
                <ul className='side-menu-items'>
                    <li className='sidebar-toggle'>
                    </li>
                        <div>
                            <div className="basketContents">
                                {checkOut.map((checkOutList, checkIndex) =>
                                {
                                    return (
                                        <img key={checkIndex} src={checkOutList.catImage} className="basketImg"/>
                                        );
                                    })}
                            </div>
                            <Link to="/checkout">
                                <button className="sendCheckout">Checkout</button>
                            </Link>
                            {checkOut.map((checkOutList, checkIndex) =>
                            {
                                console.log(checkOut)
                                return (
                                    <div>
                                        <img key={checkIndex} src={checkOutList.catImage} />
                                    </div>
                                );
                            })}
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
