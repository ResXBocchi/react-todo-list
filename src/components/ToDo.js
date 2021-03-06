import React from 'react';
import './ToDo.css'
import trashCan from '../img/trashCan.png'
import checkMark from '../img/checkMark.png'
import caneta from '../img/caneta.png'

const ToDo = ({todo, date, deleteTask,completeTask,editTask}) => {

    

    let upScaleDate = JSON.stringify(date).slice(1,11).split('-')

    
    return(
        <div className='todo'>
            <div className='task'>
                <div className={todo.complete? "done":
                                todo.deadline < new Date().setHours(0,0,0,0)?
                                'expired' : 'pending' }>
                    <>{todo.task}</>                    
                </div>
                <div className='cardBottom'>
                    <div className='date'>
                        <>{`${upScaleDate[2]}/${upScaleDate[1]}/${upScaleDate[0]}`}</>
                    </div>
                    <button className='edit' onClick={() => editTask(todo.id)}>
                        <img src={caneta} style={{maxWidth:'15px'}} alt="Edit" />
                    </button>
                    <button className='complete' onClick={() => completeTask(todo.id)}>
                        <img src={checkMark} style={{maxWidth:'15px'}} alt="Complete" />
                    </button>                    
                    <button className='delete' onClick={() => deleteTask(todo.id)}>
                        <img src={trashCan} style={{maxWidth:'15px'}} alt="Delete" />
                    </button>

                </div>       
            </div>
        </div>        
    )
};

export default ToDo;
