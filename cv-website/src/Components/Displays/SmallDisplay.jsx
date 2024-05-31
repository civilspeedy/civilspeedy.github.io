import { useEffect, useState } from 'react';
import '../../../src/App.css';

export default function SmallDisplay({ title }) {
  const [image, setImage] = useState(null);

  // not sure what too do
  useEffect(() => {
    setImage(import(`../../assets/${title}.svg`));
  }, [title]);

  return (
    <div id='smallDisplay'>
      <img
        id='smallImage'
        src={image}
        alt='Logo'
      />
      <p id='smallDisplayText'>{title}</p>
    </div>
  );
}
