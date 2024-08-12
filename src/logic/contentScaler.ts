import { scale } from './types';

// used this to scale sized based of screen size
export function scaleFactor(): scale {
    const browserHeight: number = window.innerHeight;
    const browserWidth: number = window.innerWidth;
    const screenHeight: number = window.screen.availHeight;
    const screenWidth: number = window.screen.availWidth;

    const widthScale: number = screenWidth / browserWidth;
    const heightScale: number = screenHeight / browserHeight;

    return { width: widthScale, height: heightScale };
}
