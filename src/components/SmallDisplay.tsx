import React from 'react';
import { getIcons } from '../logic/imageAcquire';
import { useScale2D, useScaleText } from '../logic/consistencyControl';

type types = { text: string };

export default function SmallDisplay({ text }: types): React.JSX.Element {
  const divSize = useScale2D('smallDisplay');
  const imgSize = useScale2D('img');
  const textSize = useScaleText('p');

  return (
    <div
      id='smallDisplay'
      style={{
        width: divSize.width,
        height: divSize.height,
      }}>
      <img
        style={{
          backgroundColor: 'white',
          width: imgSize.width,
          height: imgSize.height,
          alignSelf: 'center',
        }}
        src={getIcons(text)}
        loading='eager'
        alt='icon'
      />
      <p
        style={{
          backgroundColor: 'white',
          color: '#242424',
          textAlign: 'center',
          fontSize: textSize,
        }}>
        {text}
      </p>
    </div>
  );
}
