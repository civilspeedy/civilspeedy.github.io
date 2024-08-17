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

export function getIcons(name: string): string[] {
    switch (name) {
        case 'frameworks':
            return [
                bun_icon,
                node_icon,
                react_icon,
                vite_icon,
                expo_icon,
                flask_icon,
                sqlite_icon,
                tkinter_icon,
            ];
        case 'languages':
            return [
                python_icon,
                java_icon,
                javascript_icon,
                typescript_icon,
                html_icon,
                sql_icon,
            ];
        case 'se tools':
            return [vscode_icon, zed_icon, jetbrains_icon];
        default:
            console.error('Err in getImage: Could not find that image/images');
            return [];
    }
}
