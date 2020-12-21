import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getProducts } from './../actions/ProductsAction';
import TodoItem from './TodoItem';

function Products() {
    let dispatch = useDispatch();
    const products = useSelector(state=>state.ProductRD);

    useEffect(() => {
        dispatch(getProducts());  
    },[]);

    return (   
        <div> 
            {products.map(product=>{
                return <TodoItem key={product.id} products={product}/>
            })}  
        </div>
    );
}

export default Products;