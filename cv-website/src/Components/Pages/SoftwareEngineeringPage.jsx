import React from 'react';
import '../../App.css';
import SmallDisplay from '../Displays/SmallDisplay';

export default function SoftwareEngineeringPage() {
  const languageTitles = ['JavaScript', 'Python', 'Java'];

  const frameworkTitles = ['React & React-Native', 'Sqlite', 'Flask'];

  return (
    <>
      <div id='container'>
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
        <h2>/Projects</h2>
      </div>
    </>
  );
}
