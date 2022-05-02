import React from 'react';
import './Products.css'

const Products = ({ product }) => {
    const { quantity, img, description, name } = product
    return (
        <div>
            <div className='photo-album'>

                <div className='photo-frame'>
                    <div className='photo'>
                        <img src={img} alt="" />
                    </div>

                    <div className='photo-detailed'>

                        <div className='background'>
                            <h3>{name}</h3>
                            <p title={description}>Description: {description.length > 20 ? description.slice(0, 20) + '...' : description}  </p>
                            <p>Quantity: {quantity} </p>
                            <button className='btn btn-primary'> Stock Update </button>
                        </div>

                    </div>
                </div>
            </div>
            <br />
        </div>

    );
};

export default Products;