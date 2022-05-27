import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Day.module.css';

interface IDay { };

const Day: FC<IDay> = () => {
  return (
    <div className={styles.Day}>
      <h1>DAY SCREEN</h1>
      <NavLink to={'/calendar'}>calendar</NavLink>
    </div>
  );
}

export default Day;
