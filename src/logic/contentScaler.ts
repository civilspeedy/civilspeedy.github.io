import { resolutions, scale } from './types';

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
    console.log('here');

    return { height: newHeight, width: newWidth };
}

export function scaleText(original: number): number {
    const modifier: number = totalScaleFactor();
    const scale: number = original * modifier * 8;
    return scale;
}
