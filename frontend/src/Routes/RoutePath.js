import React from 'react';
import { map } from 'lodash';
import { Route, Routes } from 'react-router-dom';
import routeList from './routeList';
import NotFoundPage from '../pages/NotFoundPage'; // Import your 404 page

const RoutePath = () => {
  return (
    <Routes>
      {map(routeList, (item, index) => (
        <Route key={index} path={item.path} element={item.content} />
      ))}
      {/* Catch-all route for unmatched paths */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutePath;
