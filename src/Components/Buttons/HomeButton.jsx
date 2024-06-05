import { useState } from 'react';
import '../../App.css';

export default function HomeButton({ setButtons, setState, originalText }) {
  const [hovered, setHovered] = useState(false);

  const hoverStyle = {
    transition: 'transform 0.3s ease-in-out',
    transform: hovered ? 'translateX(20px)' : 'translateX(0)',
  };

  return (
    <div id='homeButton'>
      <button
        id='projectsButton'
        style={hoverStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          setState(null);
          setButtons(null);
        }}>
        {hovered == true ? '> ' + originalText : originalText}
      </button>
    </div>
  );
}
