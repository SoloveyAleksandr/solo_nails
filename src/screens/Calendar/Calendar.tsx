import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CalendarGrid from '../../components/CalendarGrid/CalendarGrid';
import { setMonth, setNextMonth, setPrevMonth, setSelectedMonth, setYear } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import styles from './Calendar.module.css';

interface ICalendar { };

interface IGetDay {
  (day: string): any
}

const Calendar: FC<ICalendar> = () => {
  const reduxDispatch = useAppDispatch();
  const appState = useAppSelector(state => state.AppStore);

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    reduxDispatch(setMonth(currentMonth));
    reduxDispatch(setYear(currentYear));
  }, []);

  //загрузка текущего месяца
  useEffect(() => {
    fetch(`http://localhost:5000/:${appState.month}/:${appState.year}`)
      .then(res => res.json())
      .then(data => reduxDispatch(setSelectedMonth(data.calendarDays)))
      .catch(err => console.log(err))
  }, [appState.month, appState.year]);

  const getDay: IGetDay = (day: string) => {
    fetch(`http://localhost:5000/days:${day}`)
      .then(res => res.text())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return (
    <div className={styles.Calendar}>
      <CalendarGrid
        handleClick={getDay}
        prevMonth={() => reduxDispatch(setPrevMonth())}
        nextMonth={() => reduxDispatch(setNextMonth())} />
    </div>
  );
}

export default Calendar;
