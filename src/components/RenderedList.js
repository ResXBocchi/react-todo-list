import React, {useState, useEffect} from 'react';
import ToDoForm from './ToDoForm';
import './RenderedList.css'
import ToDo from './ToDo'



const RenderedList = ({date}) =>{

    const [ toDoList, setToDoList ] = useState(
        window.localStorage.getItem('todolist')?
        JSON.parse(window.localStorage.getItem('todolist')) :
        [],
    );

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(toDoList));
      }, [toDoList]);

    const [pendingTasks, setPendingTasks] = useState(0);

    useEffect(() => {
        setPendingTasks(toDoList.filter(todo => !todo.complete).length);
    },[toDoList]);

    const deleteTask = id => setToDoList(toDoList.filter(todo => todo.id !== id));

    const completeTask = id =>{
        if(!toDoList[id-1].complete === true){
            let copy = [...toDoList];
            copy[id-1].complete = true;
            setToDoList(copy)
        }else{
            let copy = [...toDoList];
            copy[id-1].complete = false;
            setToDoList(copy)
        }

    };

    return(
        <div className='renderedlist'>
            Tarefas pendentes:{pendingTasks}
            <div className='form'>
                <ToDoForm
                    date={date}
                    toDoList={toDoList}
                    setToDoList={setToDoList}
                />
            </div>
            <div>                
                    {toDoList.map((todo, id) => {
                        if (todo.deadline === new Date(date).setHours(0,0,0,0)){
                            return(
                                <ToDo 
                                    todo={todo}
                                    key={id}
                                    date={date}
                                    deleteTask={deleteTask}
                                    completeTask={completeTask}
                                />
                            )
                        };return false;
                    })}
            </div>
        </div>
    )
};

export default RenderedList;