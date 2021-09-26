import React, { useState } from "react"
import TodoLi from "./TodoLi";
import "./todolist.css"

const TodoList = () =>{
    const [add, setAdd] = useState();
    const [item, setItem] = useState([]);


    const changeEvent = (event)=>{
        setAdd(event.target.value);
     
    }

    const addItems = () =>{
        setItem((oldItems)=>{
            return[...oldItems, add];
        })
        setAdd("");        
    }
    const deleteItems = (id)=>{
        setItem((oldItems)=>{
            return oldItems.filter((arrElement,index)=>{
                return  index !== id
            })
        })
    }

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a Items" onChange={changeEvent} value={add}/>
                    <button onClick={addItems}>+</button>
                    
                    <ol >
                        {
                            item.map((prevalue,index)=>{
                                return(
                                   <TodoLi 
                                   text={prevalue}
                                   onSelect={deleteItems}
                                   id={index}
                                   key = {index}
                                   
                                   />
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default TodoList;