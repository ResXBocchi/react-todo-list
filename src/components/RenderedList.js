import React, {useState} from 'react';
import data from '../data/data.json';
import ToDoList from './ToDoList'


const RenderedList = () =>{

    const [ toDoList, setToDoList ] = useState(data);

    console.log(toDoList)

    return(
        <div className='renderedList'>
            <ToDoList toDoList={toDoList}/>
        </div>
    )
};

export default RenderedList;