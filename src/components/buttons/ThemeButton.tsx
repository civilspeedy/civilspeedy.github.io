import React from 'preact/compat';
import sun from '../../assets/icons/sun-svgrepo-com.svg';
import moon from '../../assets/icons/moon-svgrepo-com.svg';
import { bgColour, Theme } from '../..';
import './buttonStyles.css';

export default function ThemeButton(): React.JSX.Element {
    return (
        <a
            onClick={() => (Theme.value = !Theme.value)}
            style={{ position: 'absolute', top: 10, right: 10 }}
        >
            <img
                id='themeButton'
                src={Theme.value ? moon : sun}
                style={{
                    backgroundColor: bgColour,
                }}
            />
        </a>
    );
}
