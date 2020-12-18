import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [name, setName]=useState();
    let dispatch = useDispatch();
    return (
        <div>
            <div className="row m-2">
                <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="col form-control" ></input>
                <button className="btn btn-primary mx-2" onClick={()=>{
                    dispatch(addTodo(
                        {
                        id:uuid(),
                        name:name
                        }
                    ));
                    setName('');
                }
                }>Add</button>
            </div>
        </div>
    );
}

export default TodoInput;