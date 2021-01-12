import React from 'react';
import './ToDo.css'

const ToDo = ({todo, date}) => {

    let upScaleDate = JSON.stringify(date).slice(1,11).split('-')

    return(
        <div className='todo'>
            <div className='task'>
                <div className={todo.complete? "done":
                                todo.deadline < new Date().setHours(0,0,0,0)?
                                'expired' : 'pending' }>
                    <>{todo.task}</>                    
                </div> <hr className='hr'/>
                <div>
                    <>{`${upScaleDate[2]}/${upScaleDate[1]}/${upScaleDate[0]}`}</>
                </div>
            </div>
        </div>        
    )
};

export default ToDo;
