import React from 'react';
import './ToDo.css'

const ToDo = ({todo}) => {

    return(
    <div className={todo.complete? "done":""}>
        <>{todo.task}</>   
       
    </div> 
        
    )
};

export default ToDo;
