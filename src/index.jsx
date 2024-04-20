import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skeletton from './components/Skeletton';
import Page404 from './view/Page404';
import Homepage from './view/portfolio/Homepage';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<Skeletton />}>
                <Route path='portfolio'>
                    <Route index element={<Homepage/>} />                             {/*Page d'accueil*/}
                    <Route path='about' element={<></>} />                             {/*Page A Propos*/}
                    <Route path='skills' element={<></>} />                     {/*Page Expériences et Compétences*/}
                    <Route path='professionalActions' index element={<></>} />  {/*Page Actions Professionnelles*/}
                    <Route path='interests' index element={<></>} />            {/*Page Centre Intérêts*/}
                    <Route path='contact' index element={<></>} />              {/*Page Contact*/}
                </Route>
                <Route path="spa" element>
                    <Route index element={<></>} />
                </Route>
                <Route index element={<Page404 />} />
                <Route path='*' element={<Page404 />} />
            </Route>
        </Routes>
    </Router >
);