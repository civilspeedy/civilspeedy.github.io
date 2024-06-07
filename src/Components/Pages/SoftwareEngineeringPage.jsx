import { useState } from 'react';
import '../../App.css';
import SmallDisplay from '../Displays/SmallDisplay';
import ProjectDisplay from '../Displays/ProjectDisplay';
import projectsData from '../../assets/json/softwareProjects.json';
import HoverButton from '../Buttons/HoverButton';
import { Grow } from '@mui/material';

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
            <HoverButton
              setState={setViewProjects}
              state={viewProjects}
              originalText={'View Projects'}
            />
          </div>
        ) : (
          <div>
            <Grow in={viewProjects}>
              <div>
                <HoverButton
                  setState={setViewProjects}
                  state={viewProjects}
                  originalText={'Back'}
                />
                <h1>/Projects</h1>
                <div id='projectsContainer'>
                  {projectsData.map((item, index) => (
                    <ProjectDisplay
                      project={item}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </Grow>
          </div>
        )}
      </div>
    </>
  );
}
