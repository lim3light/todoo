import React from "react";
import "./todo.css";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineTipsAndUpdates } from "react-icons/md";



const TodoCards = ({ title, body, id, delid, display, updateId, toBeUpdate}) => {
    return (
        <div className="p-3 todo-card">
            <div>
            <h5> {title} </h5> 
            <p className="todo-card-text">{body.split("", 55)}...</p>
            </div>
            <div className="d-flex justify-content-around">
            <div 
            className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1"
            onClick={()=>{
                display("block");
                toBeUpdate(updateId);
            }}
                >

            <MdOutlineTipsAndUpdates className="card-icons updt"/> Update
            </div>
            <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger" 
            onClick={()=>{
                delid(id);
                }}
                >
            <MdDeleteForever className="card-icons del"/> Delete
            </div>
            </div>
        </div>
    );
};


export default TodoCards;