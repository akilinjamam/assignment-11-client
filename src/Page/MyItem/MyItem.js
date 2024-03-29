import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItem.css'

const MyItem = () => {

    const [items, setItems] = useState([])
    const [user] = useAuthState(auth)
    console.log(items)

    useEffect(() => {
        const email = user?.email
        fetch(`https://assignment-11-server-production-4636.up.railway.app/myItem?email=${email}`)
            .then(res => res.json())
            .then(data => setItems(data))

    }, [user]);


    const deleteButton = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete Item')

        if (confirmDelete) {
            const url = `https://assignment-11-server-production-4636.up.railway.app/myItem/${id}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining)
                })
        }

    }
    return (
        <div>
            <br />
            <h2 className='text-success'>YOUR TOTAL ITEMS: {items.length} </h2>

            <div className='main'>


                {
                    items.map(item => <div style={{ backgroundColor: 'maroon', color: 'white', display: 'flex', justifyContent: 'space-between', width: '100%' }} className='text-start  border border-dark mt-4 rounded the-main' key={item._id}>
                        <div className='res1' style={{ width: '190px', fontSize: '11px', marginTop: '10px', marginBottom: '10px', padding: '5px', textAlign: 'center', paddingTop: '5px' }}>   <span style={{ display: 'inline-block' }}>Email: {item.email}</span></div>
                        <div className='res2' style={{ width: '130px', fontSize: '11px', marginTop: '10px', marginBottom: '10px', padding: '5px', textAlign: 'center', paddingTop: '5px' }}>   <span style={{ display: 'inline-block' }}     >Product: {item.item}</span></div>
                        <div className='res3' style={{ width: '100px', fontSize: '11px', marginTop: '10px', marginBottom: '10px', padding: '5px', textAlign: 'center', paddingTop: '5px' }}>   <span style={{ display: 'inline-block' }}>Quantity: {item.quantity}</span></div>
                        <div className='res4' style={{ width: '190px', fontSize: '11px', marginTop: '10px', marginBottom: '10px', padding: '5px', textAlign: 'center', paddingTop: '5px' }}>   <span style={{ display: 'inline-block' }}>price: {item.price}</span></div>
                        <div className='d-flex res5'>
                            <div style={{ width: '190px', fontSize: '11px', marginTop: '10px', marginBottom: '10px', padding: '5px', textAlign: 'center', paddingTop: '5px' }}>   <span style={{ display: 'inline-block' }}>Importer: {item.importer}  </span> </div>
                            <div>
                                <FontAwesomeIcon onClick={() => deleteButton(item._id)} style={{ fontSize: '20px', marginTop: '10px', marginRight: '10px', cursor: 'pointer' }} icon={faTrash} />

                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MyItem;