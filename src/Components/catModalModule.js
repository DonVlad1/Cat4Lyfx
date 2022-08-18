import Modal from 'react-modal'
import styled from 'styled-components';
import { faker } from '@faker-js/faker'
import { useState } from 'react'

const CatModal = ({ catList }) =>
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

    return (
        <div class="catImages">
            <img onClick={openModal} src={catList.url} />
            <Modal isOpen={catStateModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <CatImage onClick={"buyCat"} src={catList.url} alt="catPic" />
                <button onClick={"addToCarCatFunction"}>Add To Cart</button>
                <p>{faker.name.firstName()}</p>
                <p>{faker.phone.number()}</p>
                <p>£{Math.ceil(faker.datatype.number() / 100)}</p>
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