import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Clothes from '../pages/Clothes';
import Home from '../pages/Home';
import Techs from '../pages/Techs';

class AppRoutes extends React.PureComponent {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cloths" element={<Clothes />} />
        <Route path="/techs" element={<Techs />} />
      </Routes>
    );
  }
}

export default AppRoutes;
