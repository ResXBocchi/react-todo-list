import React, {useState} from 'react';
import './ToDoForm.css'

const ToDoForm = ({toDoList,setToDoList,date}) => {
    const [userInput, setUserInput] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput){
            addTask(userInput);
            setUserInput('');
        };
    }

    const addTask = (userInput) => {     
           
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length,
                           task: userInput,
                           deadline:new Date(date).setHours(0,0,0,0),
                           complete: false }];
        setToDoList(copy);
      }
   
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
        }

    return (
        <form  onSubmit={handleSubmit}>
            <input value={userInput}
                   type='text'
                   onChange={handleChange}
                   placeholder='Selecione a data e insira uma tarefa'
                   className="input"
            />
            <br/>
            <button className='submitbutton'
                    value='submit'
                    type='submit'>
                    Inserir tarefa
            </button>
        </form>
    )
}

export default ToDoForm;