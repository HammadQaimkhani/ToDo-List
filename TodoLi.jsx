import React from "react"

const TodoLi =(props)=>{
    return(
        <>
            <div className="list_style">
                <i className="fas fa-times" aria-hidden="true" onClick={()=>{
                    props.onSelect(props.id)
                }}></i>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default TodoLi;
