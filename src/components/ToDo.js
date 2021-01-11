import React from 'react';
import './ToDo.css'

const ToDo = ({todo}) => {

    return(
    <div className='todo'>
        <div className={todo.complete? "done": "" }>
            <>{todo.task} - </>
                
        </div> 
        <div>
            <>{Date.parse(todo.deadline)}</>
        </div>
    </div>

        
    )
};

export default ToDo;
