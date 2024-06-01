import { useEffect, useState } from 'react';
import './App.css';
import SoftwareEngineeringPage from './Components/Pages/SoftwareEngineeringPage';
import WebDevelopmentPage from './Components/Pages/WebDevelopmentPage';
import CinematographyPage from './Components/Pages/CinematographyPage';
import GraphicDesignPage from './Components/Pages/GraphicDesignPage';
import VideoEditingPage from './Components/Pages/VideoEditingPage';
import PhotographyPage from './Components/Pages/PhotographyPage';
import AboutMePage from './Components/Pages/AboutMePage';
import { Box, Grow } from '@mui/material';

export default function App() {
  const [pageState, setPageState] = useState(null);
  const [buttonHovered, setButtonHovered] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(null);
  const [stateChange, setStateChange] = useState(false);

  useEffect(() => {
    setPageState(buttonClicked);
    setStateChange(true);
  }, [buttonClicked]);

  const subjects = [
    'Software Engineering', // needs size adjustments
    'Web Development',
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
          <ul id='subjectList'>
            {subjects.map((text, index) => (
              <li key={index}>
                <button
                  onMouseEnter={() => setButtonHovered(index)}
                  onMouseLeave={() => setButtonHovered(null)}
                  onClick={() => setButtonClicked(index)}>
                  {buttonHovered == index ? '> ' + text : text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <Box sx={{ display: 'flex' }}>
            <Grow in={stateChange}>
              <div>
                {pageState === 0 && <SoftwareEngineeringPage />}
                {pageState === 1 && <WebDevelopmentPage />}
                {pageState === 2 && <CinematographyPage />}
                {pageState === 3 && <GraphicDesignPage />}
                {pageState === 4 && <VideoEditingPage />}
                {pageState === 5 && <PhotographyPage />}
                {pageState === 6 && <AboutMePage />}
              </div>
            </Grow>
          </Box>
        </>
      )}
    </>
  );
}
