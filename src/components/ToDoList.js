import React from 'react';
import ToDo from './ToDo'

const ToDoList = ({toDoList}) => {

    return(
        <div>
            {toDoList.map((todo, id) => {
                return(
                    <ToDo todo={todo}  key={id}/>
                )
            })}         
        </div> 
            
    );
};

export default ToDoList;
