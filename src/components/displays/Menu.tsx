import React, { useEffect } from 'preact/compat';
import { motion } from 'motion/react';
import { Theme } from '../..';
import './displayStyles.css';
import { animate } from 'motion';
import { pageLinks, pages } from '../../logic/assetManagement';

type Props = { state: boolean };
export default function Menu({ state }: Props): React.JSX.Element {
    useEffect(() => {
        state
            ? animate('#sideMenu', { x: -2, opacity: 1 })
            : animate('#sideMenu', { x: '100%', opacity: 0 });
    }, [state]);
    return (
        <motion.div
            id='sideMenu'
            style={{
                backgroundColor: Theme.value ? 'black' : 'white',
            }}
        >
            <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href='/'
                style={{ color: Theme.value ? 'white' : 'black' }}
            >
                Home
            </motion.a>
            {pages.map((page, index) => (
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    key={index}
                    href={pageLinks[page]}
                    style={{ color: Theme.value ? 'white' : 'black' }}
                >
                    {page}
                </motion.a>
            ))}
        </motion.div>
    );
}
