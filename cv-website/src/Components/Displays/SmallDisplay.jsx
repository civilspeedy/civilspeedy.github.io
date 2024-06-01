import React from 'react';
import '../../App.css';

export default function SmallDisplay({ title, image }) {
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
