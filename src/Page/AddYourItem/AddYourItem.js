import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddYourItem = () => {
    const navigate = useNavigate()
    const { addItemId } = useParams()
    const [user] = useAuthState(auth)

    const [items, setItems] = useState([])
    useEffect(() => {


        fetch(`https://peaceful-headland-64387.herokuapp.com/addYourItem/${addItemId}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleAddItem = (event) => {
        event.preventDefault();

        const myItem = {
            email: user.email,
            name: user.displayName,
            item: items.name,
            quantity: event.target.quantity.value,
            price: event.target.price.value,
            importer: event.target.importer.value,
            img: event.target.img.value,
        }

        axios.post('https://peaceful-headland-64387.herokuapp.com/myItem', myItem)
            .then(response => {


                console.log(response)
                toast('your order is booked');
                event.target.reset()
                navigate('/myItem')
            })
    }


    return (
        <div className='w-75 mx-auto'>
            <h2>Add your Item</h2>

            <form onSubmit={handleAddItem}>
                <ToastContainer></ToastContainer>
                <input className='w-100 mb-3' type="text" value={user?.displayName} name='name' placeholder='type your name' readOnly required /> <br />
                <input className='w-100 mb-3' type="email" value={user?.email} name='email' placeholder='type your email' readOnly required /> <br />
                <input className='w-100 mb-3' type="text" name='service' value={items.name} readOnly required /> <br />
                <input className='w-100 mb-3' type="text" name='quantity' placeholder='type quantity' required /> <br />
                <input className='w-100 mb-3' type="text" name='price' placeholder='type Price' required /> <br />
                <input className='w-100 mb-3' type="text" name='importer' placeholder='type your importer name' required /> <br />
                <input className='w-100 mb-3' type="text" name='img' placeholder='image link' required /> <br />
                <input className='w-100 mb-3 btn btn-primary' type="submit" value="place order" />
            </form>

        </div>
    );
};

export default AddYourItem;