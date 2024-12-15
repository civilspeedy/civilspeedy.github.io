import React from 'preact/compat';
import { motion } from 'motion/react';
import AboutMe from '../components/displays/AboutMe';
import './pageStyle.css';
import PageButton from '../components/buttons/PageButton';
import { beforePageOpen, pageOpen } from '../logic/animations';
import { pages } from '../logic/assetManagement';

export default function Home(): React.JSX.Element {
    return (
        <motion.div id='page' initial={beforePageOpen} animate={pageOpen}>
            <h1>Charlie Slorick</h1>
            <motion.div initial={{ x: '80%', y: '50%' }} id='btnDiv'>
                {pages.map((item, key) => (
                    <PageButton text={item} key={key} />
                ))}
            </motion.div>
            <AboutMe />
        </motion.div>
    );
}
