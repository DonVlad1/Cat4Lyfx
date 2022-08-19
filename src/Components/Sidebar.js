import React, { useEffect,useState } from 'react';
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
// import SideBarCheckout from './SideBarCheckout';

import "./Sidebar.css"



function Sidebar({ checkOut, setCheckOut, total, setTotal })
{
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    useEffect(()=> {
        // console.log(checkOut[0].catPrice)
        let sum = 0
        for (let i = 0; i < checkOut.length; i++){
            sum += Number(checkOut[i].catPrice)
        }
        setTotal(sum.toFixed(2))
    }, [checkOut,setTotal])

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
                                        <div>
                                            <div className="polaroidStyle">
                                            <img key={checkIndex} src={checkOutList.catImage} className="basketImg"/>
                                            <p className="caption">{checkOutList.catName}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;£{checkOutList.catPrice}</p>
                                            </div>
                                        </div>
                                        );
                                    })}
                            </div>
                            <p className="runningTotal">£{(total)}</p>
                            <Link to="/checkout">
                                <button className="sendCheckout">Checkout</button>
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
