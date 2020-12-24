import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { editProduct,PostEditProduct } from './../actions/ProductsAction';

function EditProduct() {
    let [data, setData] = useState({
        name: "",
        price: "",
        status: true
    });
    const { id } = useParams();
    let dispatch = useDispatch();
    const productEdit = useSelector(state => state.EditProductRD);
    useEffect(() => {
        dispatch(editProduct(id));
        setData(productEdit)
    }, [productEdit.name]);

    function GetValueInputForm(e){
        const inputData={...data}
        inputData[e.target.id]=e.target.value
        if(inputData.status == "false"){
            inputData.status = false
        }else{
            inputData.status = true
        }     
        setData(inputData)     
    }
    return (
        <div style={{ width: "50%", margin: "auto" }}>
            <div className="row m-2 p-3">
                <p className="mt-5 font-weight-bold mb-1">Add Product</p>
                <form style={{ width: "100%" }}>
                    <label className="mt-3">Name</label>
                    <input className="form-control" id="name" value={data.name || "" }
                    onChange={(e)=>GetValueInputForm(e)}></input>
                    <label className="mt-3">Price</label>
                    <input className="form-control" id="price" value={data.price || "" }
                    onChange={(e)=>GetValueInputForm(e)}></input>
                    <label className="mt-3">Status</label>
                    <select className="form-control" id="status" value={data.status || "" }
                    onChange={(e)=>GetValueInputForm(e)}>
                        <option defaultValue={data.status} value="true">true</option>
                        <option value="false">false</option>
                    </select>
                    <NavLink exact to="/">
                    <button className="btn btn-primary mt-3 mr-2" onClick={()=>dispatch(PostEditProduct(data))}>Edit</button>
                    </NavLink>
                    <NavLink exact to="/">
                        <div className="btn btn-primary mt-3">Close</div>
                    </NavLink>
                </form>
            </div>
        </div>
    );
}

export default EditProduct;