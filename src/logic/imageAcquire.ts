import bun_icon from '../assets/images/Icons/Bun.svg';
import expo_icon from '../assets/images/Icons/Expo.svg';
import flask_icon from '../assets/images/Icons/Flask.svg';
import html_icon from '../assets/images/Icons/HTML.svg';
import java_icon from '../assets/images/Icons/Java.svg';
import javascript_icon from '../assets/images/Icons/JavaScript.svg';
import lightroom_icon from '../assets/images/Icons/Lightroom.svg';
import node_icon from '../assets/images/Icons/Node.svg';
import photoshop_icon from '../assets/images/Icons/Photoshop.svg';
import premiere_icon from '../assets/images/Icons/Premiere.svg';
import python_icon from '../assets/images/Icons/Python.svg';
import react_icon from '../assets/images/Icons/React.svg';
import sql_icon from '../assets/images/Icons/SQL.svg';
import sqlite_icon from '../assets/images/Icons/Sqlite.svg';
import tkinter_icon from '../assets/images/Icons/Tkinter.png';
import vegas_icon from '../assets/images/Icons/Vegas.svg';
import vite_icon from '../assets/images/Icons/Vite.svg';
import publisher_icon from '../assets/images/Icons/Publisher.svg';
import photo_icon from '../assets/images/Icons/Photo.svg';
import designer_icon from '../assets/images/Icons/Designer.svg';
import typescript_icon from '../assets/images/Icons/TypeScript.svg';
import vscode_icon from '../assets/images/Icons/VSCode.svg';
import jetbrains_icon from '../assets/images/Icons/Jetbrains.svg';
import zed_icon from '../assets/images/Icons/Zed.svg';
import no_img from '../assets/images/noimg.svg';
import drawio_icon from '../assets/images/Icons/Drawio.svg';
import a2_img from '../assets/images/GraphicDesign/A2.jpg';
import duty_calls_img from '../assets/images/GraphicDesign/duty calls.jpg';
import lockdown_img from '../assets/images/GraphicDesign/lockdown.jpg';
import silhouette_img from '../assets/images/GraphicDesign/silhouette.jpg';
import the_eye_img from '../assets/images/GraphicDesign/theEye.jpg';
import the_hand_img from '../assets/images/GraphicDesign/theHand.jpg';
import wallpaper_img from '../assets/images/GraphicDesign/wallpaper.jpg';
import orchid_1_img from '../assets/images/Photography/bw orchid.jpg';
import orchid_2_img from '../assets/images/Photography/bw orchid 2.jpg';
import orchid_3_img from '../assets/images/Photography/bw orchid 3.jpg';
import close_up_splash_img from '../assets/images/Photography/close up splash.jpg';
import contrast_splash_img from '../assets/images/Photography/contrast splash.jpg';
import purple_splash_img from '../assets/images/Photography/purple splash.jpg';
import ring_splash_img from '../assets/images/Photography/ring splash.jpg';
import skull_roots_img from '../assets/images/Photography/skull roots.jpg';
import sunset_beach_img from '../assets/images/Photography/sunset beach.jpg';
import sunset_surfer_img from '../assets/images/Photography/sunset surfer.jpg';
import vibrant_splash_img from '../assets/images/Photography/vibrant drop.jpg';
import wood_img from '../assets/images/Photography/wood.jpg';

const icons: object = {
  Bun: bun_icon,
  Expo: expo_icon,
  Flask: flask_icon,
  HTML: html_icon,
  Java: java_icon,
  JavaScript: javascript_icon,
  Lightroom: lightroom_icon,
  Node: node_icon,
  'Adobe Photoshop': photoshop_icon,
  'Adobe Premier Pro': premiere_icon,
  Python: python_icon,
  'React & React-Native': react_icon,
  SQL: sql_icon,
  Sqlite: sqlite_icon,
  Tkinter: tkinter_icon,
  'Vegas Pro 19': vegas_icon,
  Vite: vite_icon,
  'Affinity Publisher 2': publisher_icon,
  'Affinity Photo 2': photo_icon,
  'Affinity Designer 2': designer_icon,
  TypeScript: typescript_icon,
  VScode: vscode_icon,
  'Jetbrains Toolbox': jetbrains_icon,
  Zed: zed_icon,
  'Draw.io': drawio_icon,
};

type IconKey = keyof typeof icons;

/**
 * Returns image string based on provided name.
 * @param name The name of icon be searched for.
 * @returns A string referencing the icon image.
 */
export function getIcons(name: IconKey): string {
  try {
    return icons[name];
  } catch (e) {
    console.error('Err in getIcons: ', e);
    return no_img;
  }
}

const images: object = {
  A2: a2_img,
  'Duty Calls': duty_calls_img,
  Lockdown: lockdown_img,
  Silhouette: silhouette_img,
  'The Eye': the_eye_img,
  'The Hand': the_hand_img,
  Wallpaper: wallpaper_img,
  'Sunset Beach': sunset_beach_img,
  'Sunset Surfer': sunset_surfer_img,
  'Close-Up Splash': close_up_splash_img,
  'Ring Splash': ring_splash_img,
  'Contrast Splash': contrast_splash_img,
  'Purple Splash': purple_splash_img,
  'Vibrant Splash': vibrant_splash_img,
  'Orchid 1': orchid_1_img,
  'Orchid 2': orchid_2_img,
  'Orchid 3': orchid_3_img,
  'Skull Roots': skull_roots_img,
  Wood: wood_img,
};

type ImageKey = keyof typeof images;

export function getImages(name: ImageKey): string {
  try {
    return images[name];
  } catch (e) {
    console.error(e);
    return no_img;
  }
}
