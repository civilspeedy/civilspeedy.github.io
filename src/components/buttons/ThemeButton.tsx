import React from 'preact/compat';
import sun from '../../assets/icons/sun-svgrepo-com.svg';
import moon from '../../assets/icons/moon-svgrepo-com.svg';
import { Theme } from '../..';

export default function ThemeButton(): React.JSX.Element {
    return (
        <a
            onClick={() => (Theme.value = !Theme.value)}
            style={{ position: 'absolute', top: 10, right: 10 }}
        >
            <img
                src={Theme.value ? moon : sun}
                style={{
                    height: 50,
                    width: 50,
                    padding: 10,
                    borderRadius: 20,
                    backgroundColor: Theme.value ? 'black' : 'white',
                }}
            />
        </a>
    );
}
