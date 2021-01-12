import React from 'react';
import ToDo from './ToDo'

const ToDoList = ({toDoList, date}) => {

    return(
        <div>
            {toDoList.map((todo, id) => {
                if (todo.deadline === new Date(date).setHours(0,0,0,0)){
                    return(
                        <ToDo todo={todo}  key={id} date={date}/>
                    )
                };return false;
            })}         
        </div> 
            
    );
};

export default ToDoList;
