import { useEffect, useState } from 'react';

export default function ViewProjects({ setViewProjects }) {
  const [hovered, setHovered] = useState(false);
  const [text, setText] = useState('View Projects');

  const hoverStyle = {
    transition: 'transform 0.3s ease-in-out',
    transform: hovered ? 'translateX(20px)' : 'translateX(0)',
  };

  useEffect(() => {
    if (hovered) {
      setText('> ' + text);
    } else {
      setText(text);
    }
  }, [hovered]);

  return (
    <button
      id='projectsButton'
      style={hoverStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setViewProjects(true)}
    >
      {hovered == true ? '> View Projects' : 'View Projects'}
    </button>
  );
}
