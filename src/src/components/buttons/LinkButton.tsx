import React from "preact/compat";
import { motion } from "motion/react";
import { Theme } from "../..";
import menuLinks from "../../assets/json/pageLinks.json";

type Props = { text: string };

export default function LinkButton({ text }: Props): React.JSX.Element {
    const link =
        text === "Email" ? "mailto:" + atob(menuLinks[text]) : menuLinks[text];

    const target = (): string => {
        const newTabable = ["Email", "Linkedin", "GitHub"];
        return newTabable.includes(text) ? "_blank" : "_self";
    };

    return (
        <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={link}
            style={{ color: Theme.value ? "white" : "black" }}
            target={target()}
        >
            {text}
        </motion.a>
    );
}
