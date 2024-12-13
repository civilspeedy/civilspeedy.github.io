import React from 'preact/compat';
import text from '../assets/json/gd.json';
import IconDisplay from '../components/displays/IconDisplay';
import './pageStyle.css';
import { getImages } from '../logic/assetManagement';
import { motion } from 'motion/react';
import { beforePageOpen, pageOpen } from '../logic/animations';

export default function GraphicDesignPage(): React.JSX.Element {
    const images = getImages('gd');

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
            <div id='imageDiv'>
                {images.map((image, index) => (
                    <img
                        id='image'
                        src={image}
                        key={index}
                        loading='eager'
                    />
                ))}
            </div>
        </motion.div>
    );
}
