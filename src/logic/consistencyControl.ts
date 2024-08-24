/**
 * @file contains hooks for changeable variables to be used throughout codebase.
 */

import { useEffect, useState } from 'react';
import { scaleContent, scaleText } from './contentScaler';
import { scale } from './types';

type textSizes = {
  h1Size: number;
  h2Size: number;
  pSize: number;
  btnFontSize?: number;
  btnSize?: scale;
};

const useScale = (buttons: boolean): textSizes => {
  const h1Original: number = 10; // won't go any bigger, not sure why
  const [h1Size, setH1Size] = useState<number>(h1Original);

  const h2Original: number = 8;
  const [h2Size, setH2Size] = useState<number>(h2Original);

  const pOriginal: number = 2.5;
  const [pSize, setPSize] = useState<number>(pOriginal);

  const btnOriginal: scale = { height: 20, width: 50 };
  const [btnSize, setBtnSize] = useState<scale>(btnOriginal);

  const btnFontOriginal: number = 10;
  const [btnFontSize, setBtnFontSize] = useState<number>(btnFontOriginal);

  useEffect(() => {
    const scale = () => {
      setH1Size(scaleText(h1Original));
      setH2Size(scaleText(h2Original));
      setPSize(scaleText(pOriginal));
      setBtnFontSize(scaleText(btnFontOriginal));
      setBtnSize(scaleContent(btnOriginal));
      console.log('scaling');
    };

    scale();

    window.addEventListener('resize', scale);
  }, []);

  if (buttons) {
    return { h1Size, h2Size, pSize, btnFontSize, btnSize };
  } else {
    return { h1Size, h2Size, pSize };
  }
};

export default useScale;
