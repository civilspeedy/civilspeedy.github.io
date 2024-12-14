import lightIcon from '../../assets/icons/menu-light.svg';
import darkIcon from '../../assets/icons/menu-dark.svg';
import { Theme } from '../..';
import { motion } from 'motion/react';
import './buttonStyles.css';
import { signal } from '@preact/signals';

export const menuState = signal(false);

export default function MenuButton() {
    const icon = Theme.value ? lightIcon : darkIcon;
    return (
        <motion.img
            whileHover={{ scale: 1.1 }}
            onClick={() => (menuState.value = !menuState.value)}
            src={icon}
            id='themeButton'
            style={{
                backgroundColor: Theme.value ? 'black' : 'white',
            }}
        />
    );
}
