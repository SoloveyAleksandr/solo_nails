import React, { FC, useEffect } from 'react';
import { setNextMonth, setPrevMonth } from '../../store';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ArrowBtn from '../arowBtn/ArrowBtn';

import styles from './Header.module.css';

interface IHeader { };

const Header: FC<IHeader> = () => {
  const appState = useAppSelector(state => state.AppStore);
  const reduxDispatch = useAppDispatch();

  const monthNames: string[] = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь',];

  return (
    <header className={styles.header}>
      <span className={styles.year}>{appState.year}</span>
      <div className={styles.monthWrapper}>
        <ArrowBtn
          handleClick={() => reduxDispatch(setPrevMonth())} />
        <span className={styles.month}>{monthNames[appState.month - 1]}</span>
        <ArrowBtn
          handleClick={() => reduxDispatch(setNextMonth())}
          right={true} />
      </div>
    </header>
  )
};

export default Header;
