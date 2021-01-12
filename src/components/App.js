import React, { useState }  from 'react';
import ToDoCalendar from './ToDoCalendar';
import RenderedList from './RenderedList';
import './App.css'


const App = () => {

    const [date, onChange] = useState(new Date());
    
    return(
    <div>
        <h1>The Schedule</h1>   
        <div className='calendar'>
            <ToDoCalendar date={date} onChange={onChange}/>
        </div>
        <br />
        <div>
            <RenderedList date={date}/>
        </div>
    </div> 
        
    )
};

export default App;
