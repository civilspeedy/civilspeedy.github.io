import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

export default function App() {
  const [buttonHovered, setButtonHovered] = useState(null);

  const subjects = [
    'Software Engineering',
    'Web Development',
    'Cinematography',
    'Graphic Design',
    'Video Editing',
    'Photography',
    'About Me',
  ];

  return (
    <>
      <div id='topText'>
        <h1>Charlie Slorick</h1>
      </div>
      <div>
        <ul id='subjectList'>
          {subjects.map((text, index) => (
            <li key={index}>
              <button
                onMouseEnter={() => setButtonHovered(index)}
                onMouseLeave={() => setButtonHovered(null)}
              >
                {buttonHovered == index ? '> ' + text : text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
