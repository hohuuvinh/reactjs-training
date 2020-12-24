import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from './../actions/ProductsAction';
import Product_Item from './Product_Item';
import { NavLink } from "react-router-dom";

function Products() {
    let dispatch = useDispatch();
    const products = useSelector(state => state.ProductRD);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (

        <div className="mt-5" style={{width:"50%",margin:"auto"}}>
            <NavLink exact to="/add">
                <div className="btn btn-primary mb-2 text-white">Add Product</div>
            </NavLink>
            <table class="table table-striped" style={{width:"100%"}}>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Button</th>
                </tr>
                {products.map(product => {
                    return <Product_Item key={product.id} products={product} />
                })}
            </table>

        </div>
    );
}

export default Products;