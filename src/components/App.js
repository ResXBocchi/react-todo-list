import React from 'react';
import ToDoCalendar from './ToDoCalendar';
import RenderedList from './RenderedList';
import './App.css'


const App = () => {

    return(
    <div>
        <h1>To Do List</h1>   
        <div className='calendar'>
            {ToDoCalendar()}
        </div><br />
        <div>
            {RenderedList()}
        </div>

    </div> 
        
    )
};

export default App;
