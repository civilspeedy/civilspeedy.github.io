import React, { useEffect, useState } from 'react';
import '../../App.css';
import SmallDisplay from '../Displays/SmallDisplay';
import { Grow } from '@mui/material';
import ProjectDisplay from '../Displays/ProjectDisplay';
import ViewProjects from '../Buttons/ViewProjects';
import projectsData from '../../assets/json/softwareProjects.json';

export default function SoftwareEngineeringPage() {
  const [viewProjects, setViewProjects] = useState(false);
  const languageTitles = ['JavaScript', 'Python', 'Java', 'HTML', 'SQL'];
  const frameworkTitles = [
    'React/React-Native',
    'Expo',
    'Node',
    'Sqlite',
    'Flask',
    'Tkinter',
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
                {projectsData.map((item, index) => (
                  <ProjectDisplay
                    project={item}
                    key={index}
                  />
                ))}
              </div>
            </Grow>
          </div>
        )}
      </div>
    </>
  );
}
