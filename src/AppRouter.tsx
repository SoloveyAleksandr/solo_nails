import { Routes, Route, Navigate } from 'react-router';
import React, { FC } from "react";
import { useAppSelector } from './store/hooks';
import Calendar from './screens/Calendar/Calendar';
import Day from './screens/Day/Day';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route
        path='/calendar'
        element={<Calendar />} />
      <Route
        path={'/day'}
        element={<Day />} />
      <Route
        path='/*'
        element={<Navigate to='/calendar' />} />
    </Routes>
  );
};

export default AppRouter;
