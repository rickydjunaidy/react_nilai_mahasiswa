import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './page/home.js';
import ToJSON from './page/to_json.js';

const RouterRegistration = () => {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/to-json" element={<ToJSON />} />
      </Routes>
    </Router>
      );
}

export default RouterRegistration;