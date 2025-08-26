import { JSX } from "preact/jsx-runtime";
import { motion } from "motion/react";
import { Theme } from "../..";

import Light from "../../assets/icons/file-light.svg";
import Dark from "../../assets/icons/file-dark.svg";
import PDF from "../../assets/CS CV Web.pdf";

export default function CVButton(): JSX.Element {
    return (
        <a href={PDF} target="_blank">
            <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                id="themeButton"
                src={Theme.value ? Light : Dark}
                style={{
                    backgroundColor: Theme.value ? "black" : "white",
                }}
            />
        </a>
    );
}
