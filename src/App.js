import React, { useState, useEffect }  from 'react';
import ToDoCalendar from './components/ToDoCalendar';
import RenderedList from './components/RenderedList';
import './App.css'


const App = () => {

    const [date, onChange] = useState(new Date());

    const [deadlineList, setDeadlineList] = useState([])

    const [ toDoList, setToDoList ] = useState(
        window.localStorage.getItem('todolist')?
        JSON.parse(window.localStorage.getItem('todolist')) :
        [],
    );

    useEffect(()=>{    
        const dls = []
        
            toDoList.map((todo)=>{
        
                if(!todo.complete && todo.deadline >= new Date().setHours(0,0,0,0)){
                    dls.push(todo.deadline);
                }
            })
            setDeadlineList(dls);
        
    },[toDoList])





    
    return(
    <div className='omni'>
        <h1>Get it done</h1>
        <div className='calendar'>
            <ToDoCalendar date={date} onChange={onChange}  toDoList={toDoList} setToDoList={setToDoList} deadlineList={deadlineList}/>
        </div>
        <br />
        <div>
            <RenderedList date={date} toDoList={toDoList} setToDoList={setToDoList} deadlineList={deadlineList}/>
        </div>
    </div> 
        
    )
};

export default App;
