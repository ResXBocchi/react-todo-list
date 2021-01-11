import React  from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ToDoCalendar.css'


const ToDoCalendar = ({date,onChange}) => {


    console.log(((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + date.getFullYear());
    console.log(Date.parse(date))

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
