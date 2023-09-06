import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import Score from './Score';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
<Router>
    <Link to="/pstar-pro">Index </Link>
    <Link to="/score"> Score</Link>
    <Routes>
        <Route index path="/pstar-pro" element={<App/>}/>
        <Route path="/score" element={<Score/>}/>
    </Routes>
</Router>





);