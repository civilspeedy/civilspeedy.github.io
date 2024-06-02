import React, { useState } from 'react';
import '../../App.css';
import SmallDisplay from '../Displays/SmallDisplay';
import { Grow } from '@mui/material';
import ProjectDisplay from '../Displays/ProjectDisplay';
import ViewProjects from '../Buttons/ViewProjects';

export default function SoftwareEngineeringPage() {
  const [hovered, setHovered] = useState(false);
  const [viewProjects, setViewProjects] = useState(false);
  const languageTitles = ['JavaScript', 'Python', 'Java', 'HTML'];
  const frameworkTitles = [
    'React & React-Native',
    'Expo',
    'Node',
    'Sqlite',
    'Flask',
    'Tkinter',
  ];
  const projectTitles = [
    'Conversational Interface For Weather',
    'Todo App',
    'Payroll System',
    'Prototype Web-Store',
    'Weather Data Entry Site',
    'Stocks Trading Simulator',
  ];

  return (
    <>
      <div id='container'>
        {viewProjects === false ? (
          <div>
            <h1>/Software Engineering Portfolio</h1>
            <h2>/Language Experience</h2>
            <div id='displayArea'>
              {languageTitles.map((title, index) => (
                <SmallDisplay
                  key={index}
                  title={title}
                />
              ))}
            </div>
            <h2>/Framework Experience</h2>
            <div id='displayArea'>
              {frameworkTitles.map((title, index) => (
                <SmallDisplay
                  key={index}
                  title={title}
                />
              ))}
            </div>
            <ViewProjects setViewProjects={setViewProjects} />
          </div>
        ) : (
          <div>
            <Grow in={viewProjects}>
              <div>
                <button onClick={() => setViewProjects(false)}>../</button>
                <h1>/Projects</h1>
                {projectTitles.map((title, index) => (
                  <ProjectDisplay title={title} />
                ))}
              </div>
            </Grow>
          </div>
        )}
      </div>
    </>
  );
}
