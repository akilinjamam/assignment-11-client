import React, { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {



    const { productDetailId } = useParams()
    const [product, setProduct] = useState({})
    const { img, name, description, price, quantity, supplier } = product
    console.log(quantity)

    useEffect(() => {
        const url = `https://peaceful-headland-64387.herokuapp.com/products/${productDetailId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const parsedQuantity = parseInt(quantity)
    console.log(typeof (parsedQuantity))

    let [newQuantity, setNewQuantity] = useState();

    console.log(newQuantity)

    const decreaseQuantity = (product) => {

        console.log(parseInt(product.quantity), 'clicked')
        if (product.quantity != 0) {
            let addCount = parseInt(product.quantity) - 1
            setNewQuantity(product.quantity = addCount)

        } else {
            alert('can not less then 0')
        }


    }

    const handleAdd = (event) => {


    }


    return (
        <div>
            <div style={{ border: '1px solid gray', width: '76%' }} className=' mx-auto mt-3 p-2 rounded' >
                <div>
                    <img className='w-100' src={img} alt="" />
                </div>
                <div className='text-start p-2'>
                    <h2 className='text-bold'> Brand : <span style={{ color: 'green' }}>{product.name}  </span>  </h2>

                    <p className='text-dark'>Description : {description} </p>
                    <div style={{ backgroundColor: 'lightgray', borderRadius: '10px', padding: '5px', display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <p className='text-dark mt-2 ms-2'>Quantity : {newQuantity ? newQuantity : quantity} </p>

                        <button onClick={() => decreaseQuantity(product)} className='btn btn-primary'>Delivered</button>

                    </div>
                    <p className='text-dark'>Price : {price} </p>
                    <p className='text-dark'>Suppliyer Name : {supplier} </p>
                </div>


            </div>
            <br />
            <div>
                <input type="text" name="number" id="" /> <br /> <br />
                <button onClick={handleAdd} className='btn btn-primary'>Add Quantity</button>
            </div>
        </div>
    );
};

export default ProductDetail;