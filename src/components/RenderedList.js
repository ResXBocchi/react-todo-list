import React, {useState, useEffect} from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import './RenderedList.css'


const RenderedList = ({date}) =>{

    const [ toDoList, setToDoList ] = useState(window.localStorage.getItem('todolist') ? JSON.parse(window.localStorage.getItem('todolist')) : [],);

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(toDoList));
      }, [toDoList]);

    return(
        <div className='renderedlist'>
            <div className='form'>
                <ToDoForm date={date} toDoList={toDoList} setToDoList={setToDoList}/>
            </div>
            <div className='renderedList'>
                <ToDoList toDoList={toDoList}date={date}/>
            </div>
        </div>
    )
};

export default RenderedList;