import { useEffect, useState } from 'react';

export default function MenuButton({ text, index, setButtonClicked }) {
  const [hovered, setHovered] = useState(false);
  const [textSate, setTextState] = useState(text);

  const hoverStyle = {
    transition: 'transform 0.3s ease-in-out',
    transform: hovered ? 'translateX(20px)' : 'translateX(0)',
  };

  useEffect(() => {
    if (hovered) {
      setTextState('> ' + text);
    } else {
      setTextState(text);
    }
  }, [hovered]);

  return (
    <button
      id='subjectButton'
      style={hoverStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setButtonClicked(index)}>
      {textSate}
    </button>
  );
}
