import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { getImages } from '../logic/imageAcquire';
import BigImage from './BigImage';
type Type = { image: string };
export default function ImageModal({ image }: Type): React.JSX.Element {
  // add background blur
  const [state, setState] = useState<boolean>(false);
  const [spring, anim] = useSpring(() => ({
    from: { y: -100 },
  }));
  const imgRef: string = getImages(image);
  return (
    <div>
      <img
        style={{
          width: '35%',
          height: 'auto',
          marginBottom: 10,
          alignSelf: 'center',
        }}
        src={imgRef}
        loading='lazy'
        alt={image}
        onClick={() => {
          setState(!state);
          anim.start({ from: { y: -100 }, to: { y: 0 } });
        }}
      />
      {state && (
        <animated.div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: 20,
            zIndex: 9999,
            backgroundColor: 'white',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            ...spring,
          }}>
          <button
            onClick={() => {
              anim.start({ from: { y: 0 }, to: { y: -100 } }); // doesn't work
              setState(!state);
            }}>
            Close
          </button>
          <BigImage image={imgRef} />
        </animated.div>
      )}
    </div>
  );
}
