import React from 'react';
import { getImages } from '../logic/imageAcquire';

type Type = { image: string };
export default function ImageDisplay({ image }: Type): React.JSX.Element {
  return (
    <img
      style={{
        width: '50%',
        height: 'auto',
        marginBottom: 10,
        alignSelf: 'center',
      }}
      src={getImages(image)}
      loading='eager'
      alt={image}
    />
  );
}