import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from '../../modules/home/screens/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};
