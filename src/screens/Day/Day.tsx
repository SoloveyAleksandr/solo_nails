import { FC, useEffect, useState } from 'react';
import BackBtn from '../../components/BackBtn/BackBtn';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import PlusBtn from '../../components/PlusBtn/PlusBtn';
import Spiner from '../../components/Spiner/Spiner';
import { IWorkItem, setSelectedDay } from '../../store';
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

  function addTime(): void {
    fetch(`http://localhost:5000/days:${appState.selectedDate}/add`, { method: 'POST', body: {} })

  }

  return (
    spinerIsActive ?
      <Spiner /> :
      <div className={styles.Day}>
        <Header>
          <BackBtn to={'/calendar'} />
          <span className={styles.dayInfo}>{appState.selectedDay.day} {monthNames[Number(appState.selectedDay.month) - 1]}</span>
        </Header>
        <Container>
          <div className={styles.btnWrapper}>
            <PlusBtn
              handleClick={() => console.log('click!')} />
          </div>

          <ul className={styles.list}>
            {
              appState.selectedDay.workList.map(item =>
                <li className={styles.listItem}>{item.time}</li>
              )
            }

          </ul>
        </Container>
      </div>
  );
}

interface IWorkTime {
  date: string,
  time: string,
  client: string,
  phone: string,
  comment: string,
}

function WorkTime(
  date: string,
  time: string,
  client: string ,
  phone: string,
  comment: string,
): void {
  this.date = date;
  this.time = time;
  this.client = client;
  this.phone = phone;
  this.comment = comment;
}

export default Day;
