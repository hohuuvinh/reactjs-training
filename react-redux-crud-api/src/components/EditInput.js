import React,{ useEffect,useState } from 'react';
import { NavLink } from "react-router-dom";

function EditInput(props) {
    let [data, setData]=useState(props.productEdit);
    console.log(props.productEdit);
    return (
        <div style={{width:"50%",margin:"auto"}}>
            <div className="row m-2 p-3">
                <p className="mt-5 font-weight-bold mb-1">Add Product</p>
                <form style={{width:"100%"}}>
                    <label className="mt-3">Name</label>
                    <input className="form-control" id="name"></input>
                    <label className="mt-3">Price</label>
                    <input className="form-control" id="price" ></input>
                    <label className="mt-3">Status</label>
                    <select className="form-control" id="status" >
                        <option selected value="true">true</option>
                        <option value="false">false</option>
                    </select>
                    <button className="btn btn-primary mt-3 mr-2">Add</button>
                    <NavLink exact to="/">
                        <div className="btn btn-primary mt-3">Close</div>
                    </NavLink>
                </form>        
            </div>
        </div>
    );
}

export default EditInput;