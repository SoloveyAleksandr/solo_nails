import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Calendar.module.css';

interface ICalendar { };

const Calendar: FC<ICalendar> = () => {
  return (
    <div className={styles.Calendar}>
      <h1>CALENDAR</h1>
      <NavLink to={'/day'}>day</NavLink>
    </div>
  );
}

export default Calendar;
