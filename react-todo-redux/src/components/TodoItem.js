import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItem({todo}) {
    const [editTable, setEditTable] = useState(false);
    const [name,setName] = useState(todo.name);
    let dispatch = useDispatch();
    return (
        <div>
           <div className="row m-0 align-items-center">
               <div>#{todo.id.length > 1 ?todo.id[2]:todo.id}</div>
               <div className="col">
                   {editTable ? <input type="text" className="col form-control" value={name}
                   onChange={(e)=>setName(e.target.value)} ></input> : <h4>{todo.name}</h4>}
                   
               </div>
               <button className="btn btn-primary m-2" onClick={()=>{
                   dispatch(updateTodo(
                    {
                        ...todo,
                        name:name
                    }
                   ));
                   if(editTable){
                       setName(todo.name);
                   }
                   setEditTable(!editTable);
               }}>{editTable ? "Update" :"Edit"}</button>
               <button className="btn btn-danger m-2" onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
           </div>
        </div>
    );
}

export default TodoItem;