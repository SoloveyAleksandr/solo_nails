import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import BackBtn from '../../components/BackBtn/BackBtn';
import Header from '../../components/Header/Header';
import Spiner from '../../components/Spiner/Spiner';
import { setSelectedDay } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import styles from './Day.module.css';

interface IDay { };

const Day: FC<IDay> = () => {
  const reduxDispatch = useAppDispatch();
  const appState = useAppSelector(state => state.AppStore);
  const [spinerIsActive, setActiveSpiner] = useState(true);

  const monthNames: string[] = ['января', 'февраля', 'мара', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',];

  useEffect(() => {
    setActiveSpiner(true);
    fetch(`http://localhost:5000/days:${appState.selectedDate}`)
      .then(res => res.json())
      .then(data => reduxDispatch(setSelectedDay(data)))
      .catch(err => console.log(err))
      .finally(() => setActiveSpiner(false))
  }, [appState.selectedDay]);

  return (
    spinerIsActive ?
      <Spiner /> :
      <div className={styles.Day}>
        <Header>
          <BackBtn to={'/calendar'} />
          <span className={styles.dayInfo}>{appState.selectedDay.day} {monthNames[Number(appState.selectedDay.month) - 1]}</span>
        </Header>
      </div>
  );
}

export default Day;
