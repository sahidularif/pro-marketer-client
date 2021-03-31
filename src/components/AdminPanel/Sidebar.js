import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <ul>
                <Link><li>Manage Product</li></Link>
                <Link><li>Add Product</li></Link>
                <Link><li>Edit Product</li></Link>
            </ul>
        </div>
    );
};

export default Sidebar;