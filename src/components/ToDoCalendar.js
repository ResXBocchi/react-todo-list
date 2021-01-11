import React, { useState }  from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ToDoCalendar.css'


const ToDoCalendar = ({date,onChange}) => {


    console.log(date)

    return (
      <div>
        <Calendar
          onChange={onChange}
          value={date}
          locale='pt-BR'
        />
      </div>
    );
};

export default ToDoCalendar;
