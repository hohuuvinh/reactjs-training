import React, { useState } from 'react';
import { addProduct } from './../actions/ProductsAction';
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";

function TodoInput() {
    let [data, setData]=useState({
        name:"",
        price:"",
        status:"true"
    });
    let dispatch = useDispatch();
    function submit(e){
        e.preventDefault();
        var statusCover 
        if(data.status == "true"){
            statusCover =true
        }else if(data.status == "false"){
            statusCover =false
        }
        console.log(statusCover)
        dispatch(addProduct(
            {
            name:data.name,
            price:data.price,
            status:statusCover
            }
        ));
        setData({
            name:"",
            price:"",
            status:true
        });
    }
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
        <div style={{width:"50%",margin:"auto"}}>
            <div className="row m-2 p-3">
                <p className="mt-5 font-weight-bold mb-1">Add Product</p>
                <form onSubmit={(e)=>submit(e)} style={{width:"100%"}}>
                    <label className="mt-3">Name</label>
                    <input className="form-control" onChange={(e)=>GetValueInputForm(e)} value={data.name} id="name"></input>
                    <label className="mt-3">Price</label>
                    <input className="form-control" onChange={(e)=>GetValueInputForm(e)} value={data.price} id="price"></input>
                    <label className="mt-3">Status</label>
                    <select className="form-control" id="status" onChange={(e)=>GetValueInputForm(e)} value={data.status}>
                        <option defaultValue={true} value="true">true</option>
                        <option value="false">false</option>
                    </select>
                    <NavLink exact to="/">
                    <button className="btn btn-primary mt-3 mr-2" onClick={()=>dispatch(addProduct(data))}>Add</button>
                    </NavLink>
                    <NavLink exact to="/">
                        <div className="btn btn-primary mt-3">Close</div>
                    </NavLink>
                </form>        
            </div>
        </div>
    );
}

export default TodoInput;