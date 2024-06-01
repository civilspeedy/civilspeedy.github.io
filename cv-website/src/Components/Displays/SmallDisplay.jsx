import React, { useState } from 'react';
import javaIcon from '../../assets/Java.svg';
import pythonIcon from '../../assets/Python.svg';
import javaScriptIcon from '../../assets/JavaScript.svg';
import reactIcon from '../../assets/React.svg';
import flaskIcon from '../../assets/Flask.svg';
import sqliteIcon from '../../assets/Sqlite.svg';
import nodeIcon from '../../assets/Node.svg';

import '../../App.css';
import { blue, green, lightBlue, yellow } from '@mui/material/colors';

export default function SmallDisplay({ title }) {
  const attributes = (title) => {
    switch (title) {
      case 'Java':
        return [javaIcon, 'orange'];
      case 'Python':
        return [pythonIcon, blue.A700];
      case 'JavaScript':
        return [javaScriptIcon, yellow[400]];
      case 'React & React-Native':
        return [reactIcon, lightBlue.A700];
      case 'Flask':
        return [flaskIcon, 'black'];
      case 'Sqlite':
        return [sqliteIcon, lightBlue[100]];
      case 'Node':
        return [nodeIcon, green[400]];
      default:
        return [null, 'black'];
    }
  };

  const [hover, setHover] = useState(false);
  const [icon, color] = attributes(title);

  const hoverStyle = {
    filter: hover ? `drop-shadow(0 0 1em ${color})` : 'none',
  };

  return (
    <div
      id='smallDisplay'
      style={hoverStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        id='smallImage'
        src={icon}
        alt='Logo'
      />
      <p id='smallDisplayText'>{title}</p>
    </div>
  );
}
