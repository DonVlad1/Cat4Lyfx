import Modal from 'react-modal'
import { useState } from 'react'
import '../App.css';

const CatModal = ({ catList }) =>
{
    const [catStateModal, showCatStateModal] = useState(false)
    const [checkOut, setCheckOut] = useState([])


    function openModal()
    {
        showCatStateModal(true);
    }

    function closeModal()
    {
        showCatStateModal(false);
    }

    function addToBasket()
    {
        let tempCatList = { ...catList }
        setCheckOut(tempCatList)


        //    return selectedButtons => [...selectedButtons, button]
    }


    return (
        <div className="imageBox">
            <img onClick={openModal} src={catList.catImage} className="wheelImages" alt="cat"/>
            <Modal isOpen={catStateModal} onRequestClose={closeModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                <img src={catList.catImage} alt="catPic" className="modalImg"/>
                <p>NAME: &nbsp;&nbsp;&nbsp;{catList.catName}</p>
                <p>CONTACT Nº: &nbsp;&nbsp;&nbsp;{catList.catPhone}</p>
                <p>COST: &nbsp;&nbsp;&nbsp;£{catList.catPrice}</p>
                <button onClick={addToBasket} className="checkoutButt">Add To Cart</button>
            </Modal>
        </div>
    )
}

export default CatModal
