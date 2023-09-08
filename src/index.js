import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import NavBar from './NavBar';

import Score from './Score';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
<Router>
    <NavBar/>
    <Routes>
        <Route index element={<App/>}/>
        <Route path="/score" element={<Score/>}/>
    </Routes>
</Router>





);