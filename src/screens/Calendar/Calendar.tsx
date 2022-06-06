import React, { FC, useEffect, useState } from 'react';
import CalendarGrid from '../../components/CalendarGrid/CalendarGrid';
import Header from '../../components/Header/Header';
import LoginBtn from '../../components/LoginBtn/LoginBtn';
import MonthSwitch from '../../components/MonthSwitch/MonthSwitch';
import Spiner from '../../components/Spiner/Spiner';
import WeekDays from '../../components/WeekDays/WeekDays';
import { setMonth, setNextMonth, setPrevMonth, setSelectedDate, setSelectedDay, setSelectedMonth, setYear } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import styles from './Calendar.module.css';

interface ICalendar { };

interface IGetDay {
  (day: string): any
}

const Calendar: FC<ICalendar> = () => {
  const reduxDispatch = useAppDispatch();
  const appState = useAppSelector(state => state.AppStore);
  const [spinerIsActive, setActiveSpiner] = useState(true);

  //загрузка текущего месяца
  useEffect(() => {
    setActiveSpiner(true);
    fetch(`http://localhost:5000/:${appState.month}/:${appState.year}`)
      .then(res => res.json())
      .then(data => reduxDispatch(setSelectedMonth(data.calendarDays)))
      .catch(err => console.log(err))
      .finally(() => setActiveSpiner(false))
  }, [appState.month, appState.year]);

  const getDay: IGetDay = (date: string) => reduxDispatch(setSelectedDate(date));

  return (
    spinerIsActive ?
      <Spiner /> :
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
