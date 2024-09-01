/**
 * @file contains hooks for changeable variables to be used throughout codebase.
 */

import { useEffect, useState } from 'react';
import { scaleContent, scaleText } from './contentScaler';
import { scale } from './types';
import defaults from '../assets/json/defaultSizes.json';
import { isMobile } from 'react-device-detect';

export type FontSizeKey = keyof typeof defaults.fontSizes;
type ContentSizeKey = keyof typeof defaults.contentSizes;

/**
 * A hook for a text font size to scale automatically as window size changes.
 * @param item the tag or related name of the text size being scaled.
 * @returns The scaled up font size that will update with screen size.
 */
export const useScaleText = (item: FontSizeKey): number => {
  let original: number = 0;
  try {
    if (isMobile) {
      original = defaults.mobileFont[item];
    } else {
      original = defaults.fontSizes[item];
    }
  } catch (e) {
    console.error(e);
    return 0;
  }

  const [size, setSize] = useState<number>(original);

  useEffect(() => {
    const func = () => setSize(scaleText(original));

    func();
    window.addEventListener('resize', func);
  }, []);

  return size;
};

/**
 * A hook for scaling 2D content with screen size.
 * @param item The type of content you wish to scale.
 * @returns The width and height scaled up that will update with screen size.
 */
export const useScale2D = (item: ContentSizeKey): scale => {
  let original: scale = { height: 0, width: 0 };

  try {
    original = defaults.contentSizes[item];
  } catch (e) {
    console.error(e);
    return { width: 0, height: 0 };
  }

  const [size, setSize] = useState<scale>(original);

  useEffect(() => {
    const func = () => setSize(scaleContent(original));

    func();
    window.addEventListener('resize', func);
  }, []);

  return size;
};
