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
import { getPage } from './logic/contentCreator';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home page={getPage('home')} />,
  },
  {
    path: '/Software Engineering',
    element: <SoftwareEngineeringPage page={getPage('Software Engineering')} />,
  },
  {
    path: '/Video Production',
    element: <CinematographyPage page={getPage('Video Production')} />,
  },
  {
    path: '/Graphic Design',
    element: <GraphicDesignPage page={getPage('Graphic Design')} />,
  },
  {
    path: '/Photography',
    element: <PhotographyPage page={getPage('Photography')} />,
  },
  {
    path: '/About Me',
    element: <AboutMePage page={getPage('About Me')} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
