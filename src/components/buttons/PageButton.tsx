import React, { useEffect, useState } from 'preact/compat';
import './buttonStyles.css';
import { themeSwitch } from '../../logic/styleManagement';
import { motion } from 'motion/react';
import { Theme } from '../..';

type Props = { text: string };
export default function PageButton({ text }: Props): React.JSX.Element {
    const links = {
        'Software Engineering': 'SE',
        'Video Production': 'VP',
        'Graphic Design': 'GD',
        Photography: 'PH',
    };

    return (
        <motion.a
            href={'/' + links[text]}
            style={{ color: themeSwitch(!Theme.value) }}
            id='pageButton'
            whileHover={{ scale: 1.2 }}
        >
            {text}
        </motion.a>
    );
}
