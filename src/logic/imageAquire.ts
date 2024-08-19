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

export function getIcons(name: string): string {
    switch (name) {
        case 'Bun':
            return bun_icon;
        case 'Expo':
            return expo_icon;
        case 'Flask':
            return flask_icon;
        case 'HTML':
            return html_icon;
        case 'Java':
            return java_icon;
        case 'JavaScript':
            return javascript_icon;
        case 'Lightroom':
            return lightroom_icon;
        case 'Node':
            return node_icon;
        case 'Photoshop':
            return photoshop_icon;
        case 'Premiere Pro':
            return premiere_icon;
        case 'Python':
            return python_icon;
        case 'React':
            return react_icon;
        case 'SQL':
            return sql_icon;
        case 'Sqlite':
            return sqlite_icon;
        case 'Tkinter':
            return tkinter_icon;
        case 'Vegas Pro 19':
            return vegas_icon;
        case 'Vite':
            return vite_icon;
        case 'Affinity Publisher':
            return publisher_icon;
        case 'Affinity Photo':
            return photo_icon;
        case 'Affinity Designer':
            return designer_icon;
        case 'TypeSCript':
            return typescript_icon;
        case 'VScode':
            return vscode_icon;
        case 'Jetbrains Toolbox':
            return jetbrains_icon;
        case 'Zed':
            return zed_icon;
        default:
            console.error('Err in getIcons: Could not find that image/images');
            return no_img; // make default image
    }
}
