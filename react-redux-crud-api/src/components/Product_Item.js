import React from 'react';
import { NavLink } from "react-router-dom";
import { DeleteProduct } from './../actions/ProductsAction';
import { useDispatch } from 'react-redux';

function Product_Item({ products }) {
  let dispatch = useDispatch();
  return (
    <tr>
      <td>{products.name}</td>
      <td>{products.price}</td>
      <td>{products.status ? "true" : "false"}</td>
      <td>
        <NavLink exact to={`/edit/${products.id}`}>
          <div className="btn btn-primary mr-3">Edit</div>
          </NavLink>
          <div className="btn btn-primary" onClick={()=>dispatch(DeleteProduct(products.id))}>Delete</div>
       
      </td>

    </tr>
  );
}

export default Product_Item;