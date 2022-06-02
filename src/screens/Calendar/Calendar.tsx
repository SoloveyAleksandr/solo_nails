import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CalendarGrid from '../../components/CalendarGrid/CalendarGrid';
import Header from '../../components/Header/Header';
import { IDay, setCurrentDay, setCurrentMonth } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import styles from './Calendar.module.css';

interface ICalendar { };

interface IGetDay {
  (day: string): any
}

const Calendar: FC<ICalendar> = () => {
  const reduxDispatch = useAppDispatch();
  const appState = useAppSelector(state => state.AppStore);

  //загрузка текущего месяца
  useEffect(() => {
    fetch('http://localhost:5000')
      .then(res => res.json())
      .then(data => reduxDispatch(setCurrentMonth(data.calendarDays)))
      .catch(err => console.log(err))
  }, []);

  const getDay: IGetDay = (day: string) => {
    fetch(`http://localhost:5000/days:${day}`)
      .then(res => res.text())
      // .then(data => reduxDispatch(setCurrentDay(data)))
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return (
    <div className={styles.Calendar}>
      <Header />
      <CalendarGrid
        handleClick={getDay} />
    </div>
  );
}

export default Calendar;
