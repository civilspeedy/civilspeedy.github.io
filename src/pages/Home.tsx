import React from 'preact/compat';
import { motion } from 'motion/react';
import AboutMe from '../components/displays/AboutMe';
import './pageStyle.css';
import PageButton from '../components/buttons/PageButton';
import { beforePageOpen, pageOpen } from '../logic/animations';

export default function Home(): React.JSX.Element {
    const labels: readonly string[] = [
        'Software Engineering',
        'Video Production',
        'Graphic Design',
        'Photography',
    ];
    return (
        <>
            <motion.div
                id='page'
                initial={beforePageOpen}
                animate={pageOpen}
            >
                <h1>Charlie Slorick</h1>
                <div id='btnDiv'>
                    {labels.map((item, key) => (
                        <PageButton
                            text={item}
                            key={key}
                        />
                    ))}
                </div>
                <AboutMe />
            </motion.div>
        </>
    );
}
