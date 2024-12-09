import CSS from '../assets/icons/seIcons/languageIcons/css3-svgrepo-com.svg';
import HTML from '../assets/icons/seIcons/languageIcons/html-5-svgrepo-com.svg';
import Java from '../assets/icons/seIcons/languageIcons/java-svgrepo-com.svg';
import JavaScript from '../assets/icons/seIcons/languageIcons/javascript-logo-svgrepo-com.svg';
import TypeScript from '../assets/icons/seIcons/languageIcons/typescript-icon-svgrepo-com.svg';
import SQL from '../assets/icons/seIcons/languageIcons/sql-svgrepo-com.svg';
import Python from '../assets/icons/seIcons/languageIcons/python-svgrepo-com.svg';
import Bun from '../assets/icons/seIcons/frameworkIcons/bun.svg';
import Expo from '../assets/icons/seIcons/frameworkIcons/expo-icon-svgrepo-com.svg';
import Flask from '../assets/icons/seIcons/frameworkIcons/flask-svgrepo-com.svg';
import Node from '../assets/icons/seIcons/frameworkIcons/node-svgrepo-com.svg';
import Preact from '../assets/icons/seIcons/frameworkIcons/preact-svgrepo-com.svg';
import React from '../assets/icons/seIcons/frameworkIcons/react-svgrepo-com.svg';
import Sqlite from '../assets/icons/seIcons/frameworkIcons/sqlite-svgrepo-com.svg';
import Zed from '../assets/icons/seIcons/toolIcons/stable-app-logo.9b5f959f.svg';
import Jetbrains from '../assets/icons/seIcons/toolIcons/jetbrains-svgrepo-com.svg';
import VScode from '../assets/icons/seIcons/toolIcons/vscode-svgrepo-com.svg';
import Git from '../assets/icons/seIcons/toolIcons/git-svgrepo-com.svg';
import GitHub from '../assets/icons/seIcons/toolIcons/github-142-svgrepo-com.svg';
import GitHubLight from '../assets/icons/seIcons/toolIcons/github-light.svg';
import ExpoLight from '../assets/icons/seIcons/frameworkIcons/expo-light.svg';
import FlaskLight from '../assets/icons/seIcons/frameworkIcons/flask-light.svg';
import JetbrainsLight from '../assets/icons/seIcons/toolIcons/jetbrains-light.svg';
import { Theme } from '..';
import PremierPro from '../assets/icons/vpIcons/adobepremierepro-svgrepo-com.svg';
import PremierProLight from '../assets/icons/vpIcons/adobepremierepro-lite.svg';
import Vegas from '../assets/icons/vpIcons/Vegas_Pro_19_Icon_V2.svg';

export function getIcon(name: string): string {
    const icons = {
        'Type/JavaScript': JavaScript,
        CSS,
        HTML,
        Java,
        SQL,
        Python,
        Bun,
        Expo: Theme.value ? ExpoLight : Expo,
        Flask: Theme.value ? FlaskLight : Flask,
        Node,
        Preact,
        'React & React-Native': React,
        Sqlite,
        Tkinter: Python,
        Zed,
        'Jetbrains Toolbox': Theme.value ? JetbrainsLight : Jetbrains,
        VScode,
        Git,
        GitHub: Theme.value ? GitHubLight : GitHub,
        'Adobe Premier Pro': Theme.value ? PremierProLight : PremierPro,
        'Vegas Pro 19': Vegas,
    };
    return icons[name];
}

export function getLink(name: string): string {
    const links = {
        'Type/JavaScript':
            'https://developer.mozilla.org/en-US/docs/Learn/JavaScript',
        CSS: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        HTML: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        Java: 'https://docs.oracle.com/en/java/',
        SQL: 'https://www.sqlite.org/docs.html',
        Python: 'https://www.python.org/',
        Bun: 'https://bun.sh/',
        Expo: 'https://expo.dev/',
        Flask: 'https://flask.palletsprojects.com/en/stable/',
        Node: 'https://nodejs.org/en',
        Preact: 'https://preactjs.com/',
        'React & React-Native': 'https://react.dev/',
        Sqlite: 'https://www.sqlite.org',
        Tkinter: 'https://docs.python.org/3/library/tkinter.html',
        Zed: 'https://zed.dev/',
        'Jetbrains Toolbox': 'https://www.jetbrains.com/',
        VScode: 'https://code.visualstudio.com/',
        Git: 'https://git-scm.com/',
        GitHub: 'https://github.com/',
        'Adobe Premier Pro': 'https://www.adobe.com/uk/products/premiere.html',
        'Vegas Pro 19': 'https://www.vegascreativesoftware.com/gb/vegas-pro/',
    };

    return links[name];
}
