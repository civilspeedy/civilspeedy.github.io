/**
 * @file contains hooks for changeable variables to be used throughout codebase.
 */

import { useEffect, useState } from 'react';
import { scaleContent, scaleText } from './contentScaler';
import { scale } from './types';

const useScale = (item: string): number | scale => {
  let original: number | scale = 0;

  switch (item) {
    case 'h1':
      original = 10; // won't go any bigger, not sure why
      break;
    case 'h2':
      original = 8;
      break;
    case 'p':
      original = 2.5;
      break;
    case 'btn':
      original = { height: 20, width: 50 };
      break;
    case 'btnFont':
      original = 10;
      break;
    default:
      console.error('Err in useScale: no case');
  }

  const [size, setSize] = useState<number | scale>(original);

  useEffect(() => {
    const func = () => {
      if (typeof original === 'number') {
        setSize(scaleText(original));
      } else {
        setSize(scaleContent(original));
      }
    };

    window.addEventListener('resize', func);
  }, []);

  return size;
};
// now other files need refactoring

export default useScale;
