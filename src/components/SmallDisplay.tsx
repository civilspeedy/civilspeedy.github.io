import React from 'react';

type types = { text: string; image: string };

export default function SmallDisplay({
  text,
  image,
}: types): React.JSX.Element {
  return (
    <div>
      <img
        src={image}
        loading='eager'
        alt='icon'
      />
      <p>{text}</p>
    </div>
  );
}
