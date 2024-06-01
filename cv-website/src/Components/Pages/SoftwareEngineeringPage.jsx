import React from 'react';
import '../../App.css';
import SmallDisplay from '../Displays/SmallDisplay';
import javaIcon from '../../assets/Java.svg';
import pythonIcon from '../../assets/Python.svg';
import javaScriptIcon from '../../assets/JavaScript.svg';
import reactIcon from '../../assets/React.svg';
import flaskIcon from '../../assets/Flask.svg';
import sqliteIcon from '../../assets/Sqlite.svg';

export default function SoftwareEngineeringPage() {
  const languageTitles = ['JavaScript', 'Python', 'Java'];

  const frameworkTitles = ['React & React-Native', 'Sqlite', 'Flask'];

  const getIcon = (title) => {
    switch (title) {
      case 'Java':
        return javaIcon;
      case 'Python':
        return pythonIcon;
      case 'JavaScript':
        return javaScriptIcon;
      case 'React & React-Native':
        return reactIcon;
      case 'Flask':
        return flaskIcon;
      case 'Sqlite':
        return sqliteIcon;
    }
  };
  return (
    <>
      <div id='container'>
        <h2>/Software Engineering Portfolio</h2>
        <h2>/Language Experience</h2>
        <div id='displayArea'>
          {languageTitles.map((title, index) => (
            <SmallDisplay
              key={index}
              title={title}
              image={getIcon(title)}
            />
          ))}
        </div>
        <h2>/Framework Experience</h2>
        <div id='displayArea'>
          {frameworkTitles.map((title, index) => (
            <SmallDisplay
              key={index}
              title={title}
              image={getIcon(title)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
