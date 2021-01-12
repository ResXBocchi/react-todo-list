import React from 'react';
import './ToDo.css'

const ToDo = ({todo}) => {

    let date = JSON.stringify(new Date(Date.parse(todo.deadline)))
    let upScaleDate = date.slice(1,11).split('-')

    return(
    <div className='todo'>
        <div className={todo.complete? "done": "" }>
            <>{todo.task} - </>
                
        </div> 
        <div>
            <>{`${upScaleDate[2]}/${upScaleDate[1]}/${upScaleDate[0]}`}</>
        </div>
    </div>

        
    )
};

export default ToDo;
