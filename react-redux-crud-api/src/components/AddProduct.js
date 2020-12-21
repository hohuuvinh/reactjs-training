  
import React, { useState } from 'react';
import { addProduct } from './../actions/ProductsAction';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [name, setName]=useState();
    let dispatch = useDispatch();

    function sendToReducerProduct(name){
        dispatch(addProduct(
            {
            id:uuid(),
            name:name
            }
        ));
        setName('');
    }
    return (
        <div>
            <div className="row m-2">
                <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="col form-control" ></input>
                <button className="btn btn-primary mx-2" onClick={()=>sendToReducerProduct(name)}>Add</button>
            </div>
        </div>
    );
}

export default TodoInput;