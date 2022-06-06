import React, { FC, useEffect, useState } from 'react';
import ArrowBtn from '../../components/ArowBtn/ArrowBtn';
import CalendarGrid from '../../components/CalendarGrid/CalendarGrid';
import Header from '../../components/Header/Header';
import LoginBtn from '../../components/LoginBtn/LoginBtn';
import MonthSwitch from '../../components/MonthSwitch/MonthSwitch';
import WeekDays from '../../components/WeekDays/WeekDays';
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
      <Header>
        <LoginBtn
          handleClick={() => console.log('LOGIN!')} />
        <MonthSwitch
          prevMonth={() => reduxDispatch(setPrevMonth())}
          nextMonth={() => reduxDispatch(setNextMonth())}
          month={appState.month}
          year={appState.year} />
      </Header>
      <div className={styles.weekDaysWrapper}>
        <WeekDays />
      </div>
      <CalendarGrid
        selectDay={getDay}
        prevMonth={() => reduxDispatch(setPrevMonth())}
        nextMonth={() => reduxDispatch(setNextMonth())} />
    </div>
  );
}

export default Calendar;
