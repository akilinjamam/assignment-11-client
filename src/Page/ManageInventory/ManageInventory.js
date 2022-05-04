import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../useProducts';
import Products from '../Products/Products';
import './ManageInventory.css'

const ManageInventory = () => {
    const [inventories] = useProducts()

    const navigate = useNavigate()

    const handleButton = (id) => {
        navigate(`/products/${id}`)
    }
    return (
        <div>
            <h2>Manage Inventory</h2>

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
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>



        </div>
    );
};

export default ManageInventory;