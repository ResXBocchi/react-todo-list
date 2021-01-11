import React from 'react';
import './ToDo.css'

const ToDo = ({todo}) => {

    return(
    <div>
        <div className={todo.complete? "done": "" }>
            <>{todo.task} - </>
                
        </div> 
        <div>
            <>{Date.parse(todo.deadline)}</>
        </div>
        <br />
    </div>

        
    )
};

export default ToDo;
