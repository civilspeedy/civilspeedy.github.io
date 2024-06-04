import { useEffect, useState } from 'react';
import '../../App.css';

export default function HomeButton() {
  const [hovered, setHovered] = useState(false);
  const [textSate, setTextState] = useState('home');
  // I have no idea why this is broken

  useEffect(() => {
    if (hovered) {
      setTextState('> ' + 'home');
    } else {
      setTextState('home');
    }
  }, [hovered]);

  return (
    <button
      id='homeButton'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseOver={() => setHovered(true)}
      onClick={() => {
        console.log('Click!');
      }}
    >
      {textSate}
    </button>
  );
}
