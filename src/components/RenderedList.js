import React, {useState, useEffect} from 'react';
import ToDoForm from './ToDoForm';
import './RenderedList.css'
import ToDo from './ToDo'



const RenderedList = ({date,toDoList,setToDoList}) =>{


    const [ pendingTasks, setPendingTasks ] = useState(0);

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(toDoList));
      }, [toDoList]);


    useEffect(() => {
        setPendingTasks(toDoList.filter(todo => !todo.complete &&
            todo.deadline >= new Date().setHours(0,0,0,0)).length);
    },[toDoList]);

    const deleteTask = id =>{
        setToDoList(toDoList.filter(todo => todo.id !== id))};
             
    


    const editTask = id => {
        
        const editedTask = toDoList.map((todo) =>{
            if (todo.id === id){
                const editedItem={
                    ...todo,
                    task: window.prompt('Update your value',todo.task),
                };
                return editedItem;
            }
            return todo
        });
        setToDoList(editedTask)
    }

    const completeTask = id =>{
        
        const completedTask = toDoList.map((todo) =>{
            if (todo.id === id){
                const completedItem={
                    ...todo,
                    complete: !todo.complete,
                };
                return completedItem;
            }
            return todo
        });
        setToDoList(completedTask)
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
                                    editTask={editTask}
                                />
                            )
                        };return false;
                    })}
            </div>
        </div>
    )
};

export default RenderedList;