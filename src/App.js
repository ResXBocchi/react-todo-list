import React, { useState }  from 'react';
import ToDoCalendar from './components/ToDoCalendar';
import RenderedList from './components/RenderedList';
import './App.css'


const App = () => {

    const [date, onChange] = useState(new Date());
    
    return(
    <div className='omni'>
        <h1>Get it done</h1>
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
