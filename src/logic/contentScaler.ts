import { resolutions, scale } from './types';

/**
 * Gets the user's device screen resolution for scaling content.
 * @returns The user's device screen sizes and browser window sizes.
 */
function getResolutions(): resolutions {
  const browserHeight: number = window.innerHeight;
  const browserWidth: number = window.innerWidth;
  const screenHeight: number = window.screen.height;
  const screenWidth: number = window.screen.width;
  return {
    sHeight: screenHeight,
    sWidth: screenWidth,
    wHeight: browserHeight,
    wWidth: browserWidth,
  };
}

/**
 * Gets user's screen and window size to calculate a value to scale components with.
 * @returns the width and height scale multiplier.
 */
function scaleFactor(): scale {
  const sizes: resolutions = getResolutions();

  const widthScale: number = (sizes.wWidth / sizes.sWidth) * 10;
  const heightScale: number = (sizes.wHeight / sizes.sHeight) * 10;

  return { width: widthScale, height: heightScale };
}

/**
 * Calculates the overall scale factor.
 * @returns The scale factor calculated.
 */
function totalScaleFactor(): number {
  const sizes: resolutions = getResolutions();

  const screenResolution: number = sizes.sHeight * sizes.sWidth;
  const windowResolution: number = sizes.wHeight * sizes.wWidth;
  const totalScale: number = windowResolution / screenResolution;

  return totalScale;
}

/**
 * Takes the original size of a component and then multiplies it by the scale factor.
 * @param original the original size of the component being scaled.
 * @returns returns the new scaled hight and width.
 */
export function scaleContent(original: scale): scale {
  const modifier: scale = scaleFactor();

  const newHeight: number = original.height * modifier.height;
  const newWidth: number = original.width * modifier.width;

  return { height: newHeight, width: newWidth };
}

/**
 * Takes a provided text size and scales it based on the total scale factor.
 * @param original The original size of the text.
 * @returns The new size for the text.
 */
export function scaleText(original: number): number {
  const modifier: number = totalScaleFactor();
  let scale: number = original * modifier * 8;

  if (scale > 35) {
    return 35;
  } else {
    return scale;
  }
}
