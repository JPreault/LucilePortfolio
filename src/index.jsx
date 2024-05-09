import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skeletton from './components/Skeletton';
import Page404 from './view/Page404';
import Homepage from './view/portfolio/Homepage';
import About from './view/portfolio/About';
import Contact from './view/portfolio/Contact';
import Skills from './view/portfolio/Skills';
import ProfessionalAction from './view/portfolio/ProfessionalAction';
import Interest from './view/portfolio/Interest';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<Skeletton />}>
                <Route path='portfolio'>
                    <Route index element={<Homepage />} />
                    <Route path='about' element={<About />} />
                    <Route path='skills' element={<Skills />} />
                    <Route path='professionalActions' index element={<ProfessionalAction />} />
                    <Route path='interests' index element={<Interest />} />
                    <Route path='contact' index element={<Contact />} />
                </Route>
                <Route path="spa">
                    <Route index element={<></>} />
                </Route>
                <Route index element={<Page404 />} />
                <Route path='*' element={<Page404 />} />
            </Route>
        </Routes>
    </Router >
);