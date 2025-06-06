import React from 'preact/compat';
import text from '../assets/json/vp.json';
import IconDisplay from '../components/displays/IconDisplay';
import VideoDisplay from '../components/displays/VideoDisplay';
import './pageStyle.css';
import { motion } from 'motion/react';
import { beforePageOpen, pageOpen } from '../logic/animations';

export default function VideoProductionPage(): React.JSX.Element {
    // need onscroll for windows users

    addEventListener('scroll', () => console.log('scroll'));
    return (
        <motion.div
            id='page'
            initial={beforePageOpen}
            animate={pageOpen}
        >
            <h2>Tools</h2>
            <div id='iconDiv'>
                {text.tools.map((tool, index) => (
                    <IconDisplay
                        text={tool}
                        key={index}
                    />
                ))}
            </div>
            <h2>Projects</h2>
            <div id='videoDiv'>
                {text.projects.map((proj, index) => (
                    <VideoDisplay
                        link={proj.link}
                        key={index}
                    />
                ))}
            </div>
        </motion.div>
    );
}
