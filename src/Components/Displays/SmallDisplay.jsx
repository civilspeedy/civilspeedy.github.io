import { useState } from 'react';
import '../../App.css';
import {
  blue,
  green,
  grey,
  lightBlue,
  orange,
  purple,
  yellow,
} from '@mui/material/colors';
import { icons } from '../../assets/js objects/icons';

export default function SmallDisplay({ title }) {
  const attributes = (title) => {
    const list = [icons[title]];
    switch (title) {
      case 'Java':
        list.push('orange');
        break;
      case 'Python':
        list.push(blue.A700);
        break;
      case 'JavaScript':
        list.push(yellow[400]);
        break;
      case 'React/React-Native':
        list.push(lightBlue.A700);
        break;
      case 'Flask':
        list.push('black');
        break;
      case 'Sqlite':
        list.push(lightBlue[100]);
        break;
      case 'Node':
        list.push(green[400]);
        break;
      case 'HTML':
        list.push(orange[900]);
        break;
      case 'Tkinter':
        list.push(grey[600]);
        break;
      case 'Expo':
        list.push(blue[900]);
        break;
      case 'SQL':
        list.push(yellow[600]);
        break;
      case 'Photoshop':
        list.push(blue[600]);
        break;
      case 'Lightroom':
        list.push(blue[300]);
        break;
      case 'Premiere Pro':
        list.push(purple.A400);
        break;
      case 'Vegas':
        list.push(blue.A700);
        break;
      default:
        list.push('black');
    }
    return list;
  };

  const [hover, setHover] = useState(false);
  const [icon, color] = attributes(title);

  const hoverStyle = {
    filter: hover ? `drop-shadow(0 0 1em ${color})` : 'none',
    transition: 'transform 0.1s ease-in-out',
    transform: hover ? 'translateY(-10px)' : 'translateY(0)',
  };

  return (
    <div
      id='smallDisplay'
      style={hoverStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <img
        id='smallImage'
        src={icon}
        alt='Logo'
        loading='lazy'
      />
      <p id='smallDisplayText'>{title}</p>
    </div>
  );
}