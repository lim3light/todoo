import React, { useEffect, useState } from "react";
import "./todo.css";
import TodoCards from "./TodoCards.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from "./Update.jsx";
import axios from "axios";
let toUpdateArray = [];

let id = sessionStorage.getItem("id");


const Todo = () => {
    const [Inputs, setInputs] = useState({title:"", body:""});
    useEffect (()=> {
        const fetch = async() => {
            await axios.get(`http://localhost:3000/api/v2/getTasks/${id}`)
            .then((response)=>{
                setArray(response.data.list);
            });
        };
        fetch();
    }, []);



    const [Array, setArray] = useState([]);
    const show = () => {
        document.getElementById("textarea").style.display="block";

    };
    const change = (e) => {
        const {name, value} = e.target; 
        setInputs({...Inputs, [name]:value});

    };
    const submit = async() => {
        if (Inputs.title ==="" || Inputs.body ==="") {
            toast.error("Title or body should not be empty!");            
        } else {
            if(id){
                await axios
                .post("http://localhost:3000/api/v2/addTask",
                    {title: Inputs.title, body:Inputs.body, id:id})
                .then((response)=>{
                    console.log(response);
                });
                setInputs({title:"", body:""});
                toast.success("Your task has been added.");
            } else {
                setArray([...Array, Inputs]);
                setInputs({title:"", body:""});
                toast.success("Your task has been added.");
                toast.error("Your task was not saved! Please SIGNUP!");
            }

        }
    };
    const del = async (Cardid) => {
        if(id){
            await axios.delete(`http://localhost:3000/api/v2/deleteTask/${Cardid}`, {
                data:{id}})
            .then(()=> {
                toast.success("Task has been deleted!");
            });
        } else{
            toast.error("Please SignUp first!!");
        }
        


        //index not needed anymore 
        //console.log(id);
        //Array.splice(id, "1");
        //setArray([...Array]);
    };
    const dis = (value) => {
        console.log(value);
        document.getElementById("todo-update").style.display = value;
    };
    const update = (value) => {
        toUpdateArray = Array[value];

    }
    //so it loads on submitting
    useEffect (()=> {
        if (id) {
            const fetch = async() => {
                await axios.get(`http://localhost:3000/api/v2/getTasks/${id}`)
                .then((response)=>{
                    setArray(response.data.list);
                });
            };
            fetch();
        }
    }, [submit]);


    return (
        <>
        <div className="todo">
            <ToastContainer />
              
        <div className="todo-main container d-flex justify-content-center align-items-center flex-column">
            
            <div className="d-flex flex-column todo-inputs-div w-100 p-1">
            <input 
            type="text" 
            placeholder="TITLE" 
            className="my-2 p-2 todo-inputs"
            onClick={show}
            name="title"
            value={Inputs.title}
            onChange={change}
            />
            
            <textarea
            id="textarea"
            type="text" 
            placeholder="BODY" 
            name="body"
            value={Inputs.body}
            onChange={change}
            className="p-2 todo-inputs"
            />
            </div>

            <div className="w-lg-50 w-100 d-flex justify-content-end my-3">
            <button className="task-btn p-1 my-1" onClick={submit}> 
                Add Task 
            </button>
            </div>
        
        
        </div>        
        
        <div className="todo-body"> 
            <div className="container-fluid">
                <div className="row">

                    {Array && 
                    Array.map((item, index) => (
                        <div className="col-lg-3 col-11 mx-3 mx-lg-5 my-2" key={index}> 
                        <TodoCards 
                        title={item.title} 
                        body={item.body} 
                        id={item._id} 
                        delid={del}
                        display={dis}
                        updateId={index}
                        toBeUpdate={update}
                        /> 
                        </div>
                    
                    ))}
                </div>

            </div>
        </div>


        </div>
        <div className="todo-update" id="todo-update">
            <div className="container update">
            <Update display={dis} update={toUpdateArray}/>

            </div>
        </div>
        </>
    );
};



export default Todo;