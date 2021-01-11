import React from 'react';
import ToDo from './ToDo'

const ToDoList = ({toDoList, date}) => {

    return(
        <div>
            {toDoList.map((todo, id) => {
                if (Date.parse(todo.deadline) == Date.parse(date)){
                    return(
                        <ToDo todo={todo}  key={id} date={date}/>
                    )
                }
            })}         
        </div> 
            
    );
};

export default ToDoList;
