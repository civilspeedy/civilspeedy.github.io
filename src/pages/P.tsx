import React from "preact/compat";
import "./pageStyle.css";
import text from "../assets/json/ph.json";
import IconDisplay from "../components/displays/IconDisplay";
import { Images } from "../logic/assetManagement";
import { motion } from "motion/react";
import { beforePageOpen, pageOpen } from "../logic/animations";

export default function PhotographyPage(): React.JSX.Element {
    return (
        <motion.div id="page" initial={beforePageOpen} animate={pageOpen}>
            <h2>Tools</h2>
            <div id="iconDiv">
                {text.tools.map((tool, index) => (
                    <IconDisplay text={tool} key={index} />
                ))}
            </div>
            <div id="imageDiv">
                {Images.p.map((image, index) => (
                    <img id="image" src={image} key={index} loading="eager" />
                ))}
            </div>
        </motion.div>
    );
}
