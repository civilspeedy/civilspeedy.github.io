import { useEffect, useState } from 'react';
import './App.css';
import SoftwareEngineeringPage from './Components/Pages/SoftwareEngineeringPage';
import CinematographyPage from './Components/Pages/CinematographyPage';
import GraphicDesignPage from './Components/Pages/GraphicDesignPage';
import VideoEditingPage from './Components/Pages/VideoEditingPage';
import PhotographyPage from './Components/Pages/PhotographyPage';
import AboutMePage from './Components/Pages/AboutMePage';
import { Box, Grow } from '@mui/material';
import MenuButton from './Components/Buttons/MenuButton';

import javaIcon from './assets/Java.svg';
import pythonIcon from './assets/Python.svg';
import javaScriptIcon from './assets/JavaScript.svg';
import reactIcon from './assets/React.svg';
import flaskIcon from './assets/Flask.svg';
import sqliteIcon from './assets/Sqlite.svg';
import nodeIcon from './assets/Node.svg';
import HTMLIcon from './assets/HTML.svg';
import tkinterIcon from './assets/Tkinter.png';
import expoIcon from './assets/Expo.svg';
import SQLIcon from './assets/SQL.svg';
import bunIcon from './assets/Bun.svg';
import viteIcon from './assets/Vite.svg';

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

  const [buttonClicked, setButtonClicked] = useState(null);
  const [stateChange, setStateChange] = useState(false);

  useEffect(() => {
    setPageState(buttonClicked);
    setStateChange(true);
  }, [buttonClicked]);

  const subjects = [
    'Software Engineering', // needs size adjustments
    'Cinematography',
    'Graphic Design',
    'Video Editing',
    'Photography',
    'About Me',
  ];

  return (
    <>
      <div id='backButton'>
        <button onClick={() => setButtonClicked(null)}>../</button>
      </div>
      {pageState === null ? (
        <div>
          <div id='topText'>
            <h1>Charlie Slorick</h1>
          </div>
          <Grow in={stateChange}>
            <ul id='subjectList'>
              {subjects.map((text, index) => (
                <li key={index}>
                  <MenuButton
                    text={text}
                    setButtonClicked={setButtonClicked}
                    key={index}
                    index={index}
                  />
                </li>
              ))}
            </ul>
          </Grow>
        </div>
      ) : (
        <>
          <Box sx={{ display: 'flex' }}>
            <Grow in={stateChange}>
              <div>
                {pageState === 0 && <SoftwareEngineeringPage />}
                {pageState === 1 && <CinematographyPage />}
                {pageState === 2 && <GraphicDesignPage />}
                {pageState === 3 && <VideoEditingPage />}
                {pageState === 4 && <PhotographyPage />}
                {pageState === 5 && <AboutMePage />}
              </div>
            </Grow>
          </Box>
        </>
      )}
    </>
  );
}