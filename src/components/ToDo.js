import React from 'react';
import './ToDo.css'

const ToDo = ({todo}) => {

    let customDeadline = todo.deadline.slice(0,10).split('-');

    return(
    <div className='todo'>
        <div className={todo.complete? "done": "" }>
            <>{todo.task} - </>
                
        </div> 
        <div>
            <>{`${customDeadline[2]}/${customDeadline[1]}/${customDeadline[0]}`}</>
        </div>
    </div>

        
    )
};

export default ToDo;
