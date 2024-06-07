import React, { useEffect, useState } from 'react';
import './App.css';
import SoftwareEngineeringPage from './Components/Pages/SoftwareEngineeringPage';
import CinematographyPage from './Components/Pages/CinematographyPage';
import GraphicDesignPage from './Components/Pages/GraphicDesignPage';
import VideoEditingPage from './Components/Pages/VideoEditingPage';
import PhotographyPage from './Components/Pages/PhotographyPage';
import AboutMePage from './Components/Pages/AboutMePage';
import javaIcon from './assets/icons/Java.svg';
import pythonIcon from './assets/icons/Python.svg';
import javaScriptIcon from './assets/icons/JavaScript.svg';
import reactIcon from './assets/icons/React.svg';
import flaskIcon from './assets/icons/Flask.svg';
import sqliteIcon from './assets/icons/Sqlite.svg';
import nodeIcon from './assets/icons/Node.svg';
import HTMLIcon from './assets/icons/HTML.svg';
import tkinterIcon from './assets/icons/Tkinter.png';
import expoIcon from './assets/icons/Expo.svg';
import SQLIcon from './assets/icons/SQL.svg';
import bunIcon from './assets/icons/Bun.svg';
import viteIcon from './assets/icons/Vite.svg';
import HomePage from './Components/Pages/HomePage';
import HomeButton from './Components/Buttons/HomeButton';

export const icons = {
  Java: javaIcon,
  Python: pythonIcon,
  JavaScript: javaScriptIcon,
  'React/React-Native': reactIcon,
  Flask: flaskIcon,
  Sqlite: sqliteIcon,
  Node: nodeIcon,
  HTML: HTMLIcon,
  Tkinter: tkinterIcon,
  Expo: expoIcon,
  SQL: SQLIcon,
  Bun: bunIcon,
  Vite: viteIcon,
};

export default function App() {
  const [pageState, setPageState] = useState(null);
  const homePage = <HomePage setPageState={setPageState} />;
  const [page, setPage] = useState(homePage);

  useEffect(() => {
    switch (pageState) {
      case 0:
        setPage(<SoftwareEngineeringPage />);
        break;
      case 1:
        setPage(<CinematographyPage />);
        break;
      case 2:
        setPage(<GraphicDesignPage />);
        break;
      case 3:
        setPage(<VideoEditingPage />);
        break;
      case 4:
        setPage(<PhotographyPage />);
        break;
      case 5:
        setPage(<AboutMePage />);
        break;
      default:
        setPage(homePage);
        break;
    }
  }, [pageState]);

  return (
    <>
      <div>
        {pageState === null ? (
          <div>{page}</div>
        ) : (
          <div>
            <HomeButton
              setState={setPageState}
              originalText={'Home'}
            />
            {page}
          </div>
        )}
      </div>
    </>
  );
}
