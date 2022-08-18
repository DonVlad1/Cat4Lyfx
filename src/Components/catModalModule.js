import Modal from 'react-modal'
import styled from 'styled-components';
import { useState } from 'react'

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
        <div class="catImages">
            <CatImage onClick={openModal} src={catList.catImage} />
            <Modal isOpen={catStateModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <CatImage src={catList.catImage} alt="catPic" />
                <button onClick={addToBasket}>Add To Cart</button>
                <p>{catList.catName}</p>
                <p>{catList.catPhone}</p>
                <p>{catList.catPrice}</p>
                {/* {console.log(allCatDetails)} */}
            </Modal>
        </div>
    )
}


export default CatModal

const CatImage = styled.img`
    display: flex;
    justify-content: center;
    width: 200px;
    margin: 10px;
`

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};