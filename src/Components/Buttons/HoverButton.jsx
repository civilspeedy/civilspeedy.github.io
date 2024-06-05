import { useEffect, useState } from 'react';

export default function HoverButton({ state, setState, originalText }) {
  const [hovered, setHovered] = useState(false);

  const hoverStyle = {
    transition: 'transform 0.3s ease-in-out',
    transform: hovered ? 'translateX(20px)' : 'translateX(0)',
  };

  return (
    <button
      id='projectsButton'
      style={hoverStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setState(!state)}
    >
      {hovered == true ? '> ' + originalText : originalText}
    </button>
  );
}
