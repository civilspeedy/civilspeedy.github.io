import React from 'react';

type Type = { image: string };

export default function BigImage({ image }: Type): React.JSX.Element {
  // some images too big
  return (
    <img
      src={image}
      style={{
        width: 'auto',
        height: 'auto',
        maxHeight: '90%',
        maxWidth: '90%',
      }}
    />
  );
}
