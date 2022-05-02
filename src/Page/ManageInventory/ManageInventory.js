import React from 'react';
import useProducts from '../../useProducts';
import Products from '../Products/Products';

const ManageInventory = () => {
    const [inventories] = useProducts()
    return (
        <div>
            <h2>Manage Inventory</h2>

            {
                inventories.map(inventory => <Products key={inventory._id} product={inventory}  ></Products>)
            }

        </div>
    );
};

export default ManageInventory;