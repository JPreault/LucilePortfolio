import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skeletton from './view/Skeletton';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<Skeletton />}>
                <Route path="portfolio">
                    <Route index element={<p>portfolio</p>} />
                </Route>
                <Route path="spa">
                    <Route index element={<p>spa</p>} />
                </Route>
                <Route path="*" element={<p>404</p>} />
            </Route>
        </Routes>
    </Router>
);