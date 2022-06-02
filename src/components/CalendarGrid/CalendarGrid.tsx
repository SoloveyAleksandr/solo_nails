import React, { FC } from "react";
import { useAppSelector } from "../../store/hooks";

import styles from "./CalendarGrid.module.css";

interface ICalendarGrid { };

const CalendarGrid: FC<ICalendarGrid> = () => {
  const appState = useAppSelector(state => state.AppStore);

  return (
    <div className={styles.calendarGrid}>
      {
        appState.currentMonth.map((day, index) =>
          <div key={day.fullDate} className={
            day.isWeekend ?
              `${styles.calendarGridCell} ${styles.isWeekend}` : `${styles.calendarGridCell}`}>
            {day.day}
          </div>
        )
      }
    </div>
  )
}

export default CalendarGrid;