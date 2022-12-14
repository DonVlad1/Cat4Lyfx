import Modal from 'react-modal'
import { useState } from 'react'
import '../App.css';

const CatModal = ({ catList, checkOut, setCheckOut, total, setTotal }) =>
{
    const [catStateModal, showCatStateModal] = useState(false)


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
        const tempCatList = [...checkOut, catList]
        setCheckOut(tempCatList)
        // for (let i = 0; i < checkOut.length; i++){
        //     if (checkOut.includes(catId))
        // }
    }


    return (
        <div className="imageBox">
            <img onClick={openModal} src={catList.catImage} className="wheelImages" alt="cat"/>
            <Modal isOpen={catStateModal} onRequestClose={closeModal} className="modalContent" contentLabel="Example Modal" overlayClassName="modalZ">
                <img src={catList.catImage} alt="catPic" className="modalImg"/>
                <p>NAME: &nbsp;&nbsp;&nbsp;{catList.catName}</p>
                <p>CONTACT Nº: &nbsp;&nbsp;&nbsp;{catList.catPhone}</p>
                <p>COST: &nbsp;&nbsp;&nbsp;£{catList.catPrice}</p>
                <button onClick={addToBasket} className="checkoutButt">Add To Basket</button>
            </Modal>
        </div>
    )
}

export default CatModal
