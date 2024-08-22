import React, { useEffect, useState } from 'react';
import { getIcons } from '../logic/imageAquire';
import { scale } from '../logic/types';
import { scaleContent, scaleText } from '../logic/contentScaler';

type types = { text: string };

export default function SmallDisplay({ text }: types): React.JSX.Element {
  const originalDivSize: scale = { width: 12, height: 16 };
  const [divSize, setDivSize] = useState<scale>(originalDivSize);
  const originalImgSize: scale = { width: 8, height: 8 };
  const [imgSize, setImgSize] = useState<scale>(originalImgSize);
  const originalTextSize = 2.5;
  const [textSize, setTextSize] = useState<number>(originalTextSize);

  useEffect(() => {
    const scaler = () => {
      setDivSize(scaleContent(originalDivSize));
      setImgSize(scaleContent(originalImgSize));
      setTextSize(scaleText(originalTextSize));
    };

    scaler();
    window.addEventListener('resize', scaler);
    return () => window.removeEventListener('resize', scaler);
  }, []);
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
