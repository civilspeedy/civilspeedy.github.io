import CSS from '../assets/icons/languageIcons/css3-svgrepo-com.svg';
import HTML from '../assets/icons/languageIcons/html-5-svgrepo-com.svg';
import Java from '../assets/icons/languageIcons/java-svgrepo-com.svg';
import JavaScript from '../assets/icons/languageIcons/javascript-logo-svgrepo-com.svg';
import TypeScript from '../assets/icons/languageIcons/typescript-icon-svgrepo-com.svg';
import SQL from '../assets/icons/languageIcons/sql-svgrepo-com.svg';
import Python from '../assets/icons/languageIcons/python-svgrepo-com.svg';

export function getIcon(name: string): string {
    const icons = {
        CSS,
        HTML,
        Java,
        JavaScript,
        TypeScript,
        SQL,
        Python,
    };

    return icons[name];
}
