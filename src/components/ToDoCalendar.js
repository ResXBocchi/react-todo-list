import React  from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ToDoCalendar.css'


const ToDoCalendar = ({date,onChange,deadlineList}) => {

    return (
      <div>
        <Calendar
          onChange={onChange}
          value={date}
          locale='pt-BR'
          showNeighboringMonth={false}
          tileContent={({ date, view }) => view === 'month' && deadlineList.includes(date.setHours(0,0,0,0)) ? '*' : null}
        />
      </div>
    );
};

export default ToDoCalendar;
