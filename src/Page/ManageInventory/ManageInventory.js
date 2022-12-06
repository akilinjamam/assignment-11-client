import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useProducts from '../../useProducts';
import Products from '../Products/Products';
import './ManageInventory.css'
import deleteIcon from '../../icon/delete.png'

const ManageInventory = () => {

    const [inventories, setInventories] = useProducts()




    const navigate = useNavigate()

    const handleButton = (id) => {
        navigate(`/products/${id}`)
    }

    const handleItem = (id) => {
        navigate(`/addYourItem/${id}`)
    }

    const deleteButton = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete Item')

        if (confirmDelete) {
            const url = `https://assignment-11-server-production-4636.up.railway.app/products/${id}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining)
                })
        }

    }


    return (
        <div>
            <h2 className='text-success'>Manage Inventory</h2>

            <div className='the-grid'>

                {
                    inventories.map(inventory => <div key={inventory._id} >

                        <div className='photos-album'>

                            <div className='photos-frame'>
                                <div className='photos'>
                                    <img src={inventory.img} alt="" />
                                </div>

                                <div className='photos-detailed'>

                                    <div className='backgrounds'>
                                        <h3>{inventory.name}</h3>
                                        <p title={inventory.description}>Description: {inventory.description.length > 20 ? inventory.description.slice(0, 20) + '...' : inventory.description}  </p>
                                        <p>Quantity: {inventory.quantity} </p>
                                        <button onClick={() => handleButton(inventory._id)} className='btn btn-primary'> Stock Update </button>
                                        <button onClick={() => handleItem(inventory._id)} className='btn btn-primary ms-2'>Add to Your Item</button>

                                        <div style={{ position: 'absolute', right: '0', display: 'inline', paddingBottom: '10px', paddingRight: '10px' }}>
                                            <span style={{ position: 'relative' }}>
                                                <button className='trash' onClick={() => deleteButton(inventory._id)} style={{ border: 'none', backgroundColor: 'rgba(252, 201, 71, 0)' }}> <img style={{ width: '40px', }} className=' dlt the-dlt ' src={deleteIcon} alt="" /></button>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>)
                }
            </div>
            <br />

            <Link className='btn btn-primary' to='/additems'> Add New Item </Link>

        </div>
    );
};

export default ManageInventory;