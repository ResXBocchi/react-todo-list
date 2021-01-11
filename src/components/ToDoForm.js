import React, {useState} from 'react';

const ToDoForm = ({toDoList,setToDoList,date}) => {
    const [userInput, setUserInput] = useState('');
    
    const addTask = (userInput) => {        
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, deadline:date, complete: false }];
        setToDoList(copy);

      }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInput)
        addTask(userInput);
        setUserInput('');
    }
    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
        }



    return (
        <form  onSubmit={handleSubmit}>
            <input value={userInput} type='text' onChange={handleChange} placeholder='Selecione a data e insira uma tarefa'>
            </input>
            <button className='button' value='Cadastrar tarefa' type='submit'></button>
        </form>
    )
}

export default ToDoForm;