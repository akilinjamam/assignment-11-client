import React from 'react';

const Products = ({ product }) => {
    const { quantity } = product
    return (
        <div>
            this is all products {quantity}
        </div>
    );
};

export default Products;