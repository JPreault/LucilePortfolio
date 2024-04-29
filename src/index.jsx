import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skeletton from './components/Skeletton';
import Page404 from './view/Page404';
import Homepage from './view/portfolio/Homepage';
import About from './view/portfolio/About';
import FirstScene from './view/spa/FirstScene';
import { useGLTF } from '@react-three/drei';

export const Models = [
    { title: 'cabine', url: '/models/cabine.glb' },
    { title: 'CabineV1', url: '/models/CabineV1.glb' },
    { title: 'kitchen-transformed', url: '/models/kitchen-transformed.glb' }
]

useGLTF.preload(Models.map(({ url }) => url))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<Skeletton />}>
                <Route path='portfolio'>
                    <Route index element={<Homepage />} />                       {/*Page d'accueil*/}
                    <Route path='about' element={<About />} />                   {/*Page A Propos*/}
                    <Route path='skills' element={<></>} />                     {/*Page Expériences et Compétences*/}
                    <Route path='professionalActions' index element={<></>} />  {/*Page Actions Professionnelles*/}
                    <Route path='interests' index element={<></>} />            {/*Page Centre Intérêts*/}
                    <Route path='contact' index element={<></>} />              {/*Page Contact*/}
                </Route>
                <Route path="spa">
                    <Route index element={<FirstScene />} />
                </Route>
                <Route index element={<Page404 />} />
                <Route path='*' element={<Page404 />} />
            </Route>
        </Routes>
    </Router >
);