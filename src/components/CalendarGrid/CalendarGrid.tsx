import React, { FC } from "react";
import { useAppSelector } from "../../store/hooks";

import styles from "./CalendarGrid.module.css";

interface ICalendarGrid {
  handleClick(day: string): {},
  prevMonth(): void,
  nextMonth(): void,
};

const CalendarGrid: FC<ICalendarGrid> = ({
  handleClick,
  prevMonth,
  nextMonth,
}) => {
  const appState = useAppSelector(state => state.AppStore);
  const obj = {
    '01.02.2022': [
      {
        time: '14:00',
        reserved: false,
        client: {
          name: 'Alex',
          number: '+375291068668',
          comment: 'Кофейку заварите',
        }
      }
    ]
  }
  return (
    <div className={styles.calendarGrid}>
      <div className={`${styles.calendarGridCell} ${styles.weekDay}`}>ПН</div>
      <div className={`${styles.calendarGridCell} ${styles.weekDay}`}>ВТ</div>
      <div className={`${styles.calendarGridCell} ${styles.weekDay}`}>СР</div>
      <div className={`${styles.calendarGridCell} ${styles.weekDay}`}>ЧТ</div>
      <div className={`${styles.calendarGridCell} ${styles.weekDay}`}>ПТ</div>
      <div className={`${styles.calendarGridCell} ${styles.weekDay}`}>СБ</div>
      <div className={`${styles.calendarGridCell} ${styles.weekDay}`}>ВС</div>
      {
        appState.selectedMonth.map(day =>
          <div key={day.fullDate}
            onClick={() => {
              if (day.isPrevMonth) {
                prevMonth();
                return;
              } else if (day.isNextMonth) {
                nextMonth();
                return;
              } else {
                handleClick(day.fullDate);
                return;
              }
            }}
            className={
              day.isPrevMonth || day.isNextMonth ?
                `${styles.calendarGridCell} ${styles.disabled} ${day.isWeekend ? styles.isWeekend : ''}` :
                `${styles.calendarGridCell} ${day.isWeekend ? styles.isWeekend : ''}`
            }>
            <span className={`${styles.day} ${day.isToday ? styles.isToday : ''}`}>
              {day.day}
            </span>
          </div>
        )
      }
    </div>
  )
}

export default CalendarGrid;
