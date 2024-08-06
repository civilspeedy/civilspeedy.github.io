import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import SoftwareEngineeringPage from './pages/SoftwareEngineering';
import CinematographyPage from './pages/Cinematography';
import GraphicDesignPage from './pages/GraphicDesign';
import PhotographyPage from './pages/Photography';
import AboutMePage from './pages/AboutMe';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/Software Engineering',
        element: <SoftwareEngineeringPage />,
    },
    {
        path: '/Cinematography',
        element: <CinematographyPage />,
    },
    {
        path: '/Graphic Design',
        element: <GraphicDesignPage />,
    },
    {
        path: '/Photography',
        element: <PhotographyPage />,
    },
    {
        path: '/About Me',
        element: <AboutMePage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
