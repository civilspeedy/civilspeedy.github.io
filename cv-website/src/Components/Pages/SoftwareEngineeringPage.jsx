import React, { useState } from 'react';
import '../../App.css';
import SmallDisplay from '../Displays/SmallDisplay';
import { Grow } from '@mui/material';

export default function SoftwareEngineeringPage() {
  const [hovered, setHovered] = useState(false);
  const [viewProjects, setViewProjects] = useState(false);
  const languageTitles = ['JavaScript', 'Python', 'Java'];
  const frameworkTitles = ['React & React-Native', 'Node', 'Sqlite', 'Flask'];

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
            <button
              id='projectsButton'
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => setViewProjects(true)}
            >
              {hovered == true ? '> View Projects' : 'View Projects'}
            </button>
          </div>
        ) : (
          <div>
            <Grow in={viewProjects}>
              <div>
                <h1>/Projects</h1>
              </div>
            </Grow>
          </div>
        )}
      </div>
    </>
  );
}
