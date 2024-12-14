import React from 'preact/compat';
import sun from '../../assets/icons/sun-svgrepo-com.svg';
import moon from '../../assets/icons/moon-svgrepo-com.svg';
import { motion } from 'motion/react';
import { Theme } from '../..';
import './buttonStyles.css';

export default function ThemeButton(): React.JSX.Element {
    return (
        <motion.img
            whileHover={{ scale: 1.1 }}
            id='themeButton'
            onClick={() => (Theme.value = !Theme.value)}
            src={Theme.value ? moon : sun}
            style={{
                backgroundColor: Theme.value ? 'black' : 'white',
            }}
        />
    );
}
