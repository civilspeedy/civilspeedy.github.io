import React from "preact/compat";
import "./buttonStyles.css";
import { themeSwitch } from "../../logic/styleManagement";
import { motion } from "motion/react";
import { Theme } from "../..";
import pageLinks from "../../assets/json/pageLinks.json";

type Props = { text: string };
export default function PageButton({ text }: Props): React.JSX.Element {
    return (
        <motion.a
            href={"/" + pageLinks[text]}
            style={{ color: themeSwitch(!Theme.value) }}
            id="pageButton"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
        >
            {text}
        </motion.a>
    );
}
