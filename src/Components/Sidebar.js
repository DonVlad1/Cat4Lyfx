import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import { Link } from 'react-router-dom';
// import SideBarCheckout from './SideBarCheckout';

import "./Sidebar.css"

function Sidebar({ checkOut, setCheckOut, total, setTotal })
{
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    useEffect(() =>
    {
        // console.log(checkOut[0].catPrice)
        let sum = 0
        for (let i = 0; i < checkOut.length; i++)
        {
            sum += Number(checkOut[i].catPrice)
        }
        setTotal(sum.toFixed(2))
    }, [checkOut, setTotal])

    function removeItem(index)
    {
        for (let i = 0; i < checkOut.length; i++)
        {
            if (checkOut[i].catId === index.catId)
            {
                let removeCatFromCart = [...checkOut];
                removeCatFromCart.splice(i, 1)
                setCheckOut(removeCatFromCart)
            }
        }
    }

    return (
        <>
            <div className={sidebar ? 'fixMeDaddy somethingElse' : 'fixMeDaddy'}>
                <button className="basket" onClick={showSidebar}>
                    <BasketDiv>
                        Checkout Basket&nbsp;&nbsp;
                        <AiIcons.AiOutlineShoppingCart className='cart-icon' />
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
                                {checkOut.map((checkOutList, index) =>
                                {
                                    return (
                                        <div className="polaroidStyle" key={index}>
                                            <img src={checkOutList.catImage} className="basketImg" alt='checkOut' />
                                            <p className="caption">{checkOutList.catName}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;??{checkOutList.catPrice}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <TbIcons.TbTrashX className='trashIcon' onClick={() => removeItem(checkOutList, index)} /></p>
                                        </div>
                                    );
                                })}
                            </div>
                            <p className="runningTotal">??{total}</p>
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
