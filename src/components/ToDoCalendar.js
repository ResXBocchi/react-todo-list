import React, { useState }  from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ToDoCalendar.css'


const ToDoCalendar = () => {

    const [value, onChange] = useState(new Date());

    console.log(value)

    return (
      <div>
        <Calendar
          onChange={onChange}
          value={value}
          locale='pt-BR'
        />
      </div>
    );
};

export default ToDoCalendar;
