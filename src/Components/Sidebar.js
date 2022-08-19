import React, { useState } from 'react';
import styled from 'styled-components'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'
import "./Sidebar.css"
import { IconContext} from 'react-icons'


function Sidebar() {
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
                        <AiIcons.AiOutlineShoppingCart className='cart-icon'/>
                    </BasketDiv>
                </button>
            </Link>
            <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
                <ul className='side-menu-items'>
                    <li className='sidebar-toggle'>
                        <Link to="#" className='menu-bars'>
                            {/* changes x to white */}
                            {/* <IconContext.Provider value={{color: '#fff'}}> */}
                                {/* the X on the sidebar \/ */}
                                <AiIcons.AiOutlineClose className='x-icon' onClick={showSidebar}/>
                            {/* </IconContext.Provider> */}
                        </Link>
                    </li>
                    {/* Below is the old navation information */}
                    {/* {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                            )
                        })} */}
                        <div>
                            <button>Checkout</button>
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