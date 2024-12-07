import CSS from '../assets/icons/languageIcons/css3-svgrepo-com.svg';
import HTML from '../assets/icons/languageIcons/html-5-svgrepo-com.svg';
import Java from '../assets/icons/languageIcons/java-svgrepo-com.svg';
import JavaScript from '../assets/icons/languageIcons/javascript-logo-svgrepo-com.svg';
import TypeScript from '../assets/icons/languageIcons/typescript-icon-svgrepo-com.svg';
import SQL from '../assets/icons/languageIcons/sql-svgrepo-com.svg';
import Python from '../assets/icons/languageIcons/python-svgrepo-com.svg';
import Bun from '../assets/icons/frameworkIcons/bun.svg';
import Expo from '../assets/icons/frameworkIcons/expo-icon-svgrepo-com.svg';
import Flask from '../assets/icons/frameworkIcons/flask-svgrepo-com.svg';
import Node from '../assets/icons/frameworkIcons/node-svgrepo-com.svg';
import Preact from '../assets/icons/frameworkIcons/preact-svgrepo-com.svg';
import React from '../assets/icons/frameworkIcons/react-svgrepo-com.svg';
import Sqlite from '../assets/icons/frameworkIcons/sqlite-svgrepo-com.svg';
import Zed from '../assets/icons/toolIcons/stable-app-logo.9b5f959f.svg';
import Jetbrains from '../assets/icons/toolIcons/jetbrains-svgrepo-com.svg';
import VScode from '../assets/icons/toolIcons/vscode-svgrepo-com.svg';
import Git from '../assets/icons/toolIcons/git-svgrepo-com.svg';
import GitHub from '../assets/icons/toolIcons/github-142-svgrepo-com.svg';
import GitHubLight from '../assets/icons/toolIcons/github-light.svg';
import ExpoLight from '../assets/icons/frameworkIcons/expo-light.svg';
import FlaskLight from '../assets/icons/frameworkIcons/flask-light.svg';
import JetbrainsLight from '../assets/icons/toolIcons/jetbrains-light.svg';
import { Theme } from '..';

export function getIcon(name: string): string {
    let gitHubIcon = GitHub;
    let expoIcon = Expo;
    let flaskIcon = Flask;
    let jetbrainsIcon = Jetbrains;

    if (Theme.value) {
        gitHubIcon = GitHubLight;
        expoIcon = ExpoLight;
        flaskIcon = FlaskLight;
        jetbrainsIcon = JetbrainsLight;
    }

    const icons = {
        'Type/JavaScript': JavaScript,
        CSS,
        HTML,
        Java,
        SQL,
        Python,
        Bun,
        Expo: expoIcon,
        Flask: flaskIcon,
        Node,
        Preact,
        'React & React-Native': React,
        Sqlite,
        Tkinter: Python,
        Zed,
        'Jetbrains Toolbox': jetbrainsIcon,
        VScode,
        Git,
        GitHub: gitHubIcon,
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
    };

    return links[name];
}
