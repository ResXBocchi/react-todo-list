import React  from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ToDoCalendar.css'


const ToDoCalendar = ({date,onChange}) => {


    return (
      <div>
        <Calendar
          onChange={onChange}
          value={date}
          locale='pt-BR'
          showNeighboringMonth={false}
        />
      </div>
    );
};

export default ToDoCalendar;
