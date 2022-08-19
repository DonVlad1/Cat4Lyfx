import React, { useState } from 'react';
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';


import "./Sidebar.css"
import { CatModal } from './catModalModule';



function Sidebar({ checkOut, setCheckOut })
{
    const [sidebar, setSidebar] = useState(false)




    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>


            <div className='sidebar'>
                <Link to="#" className='menu-bars'>
                    {/* hamburger icon for sidebar */}
                    {/* <FaIcons.FaBars onClick={showSidebar}/> 🛒*/}
                    <button className="basket" onClick={showSidebar}>
                        <BasketDiv>
                            Checkout Basket&nbsp;&nbsp;
                            <AiIcons.AiOutlineShoppingCart className='cart-icon' />
                        </BasketDiv>
                    </button>
                </Link>
                <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
                    <ul className='side-menu-items'>
                        <li className='sidebar-toggle'>
                            <Link to="#" className='menu-bars'>
                                {/* changes x to white */}
                                {/* the X on the sidebar \/ */}
                                <AiIcons.AiOutlineClose className='x-icon' onClick={showSidebar} />
                            </Link>
                        </li>
                        <div>
                            <button>Checkout</button>
                            <img src={checkOut.catImage} />
                            <div>
                                {checkOut.map((checkOutList, checkIndex) =>
                                {
                                    console.log(checkOut)
                                    return (
                                        <img src={checkOutList.catImage} />
                                    );
                                })}
                            </div>
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