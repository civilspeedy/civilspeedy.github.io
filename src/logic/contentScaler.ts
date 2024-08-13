import { scale } from './types';

/**
 * Gets user's screen and window size to calculate a value to scale components with.
 * @returns the width and height scale multiplier.
 */
function scaleFactor(): scale {
    const browserHeight: number = window.innerHeight;
    const browserWidth: number = window.innerWidth;
    const screenHeight: number = window.screen.height;
    const screenWidth: number = window.screen.width;

    console.log('res = ', screenWidth, 'x', screenHeight);
    console.log('window = ', browserWidth, 'x', browserHeight);

    const widthScale: number = (browserWidth / screenWidth) * 10;
    const heightScale: number = (browserHeight / screenHeight) * 10;

    console.log('scale factors = w', widthScale, ' h', heightScale);

    return { width: widthScale, height: heightScale };
}

export function scaleContent(original: scale): scale {
    const modifier = scaleFactor();

    const newHeight: number = original.height * modifier.height;
    const newWidth: number = original.width * modifier.width;

    return { height: newHeight, width: newWidth };
}
