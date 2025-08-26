import React from "preact/compat";
import { getIcon, getLink } from "../../logic/assetManagement";
import "./displayStyles.css";
import { themeSwitch } from "../../logic/styleManagement";
import { Theme } from "../..";
import { motion } from "motion/react";

type Props = { text: string };
export default function IconDisplay({ text }: Props): React.JSX.Element {
    const isBox: boolean = [
        "Type/JavaScript",
        "Zed",
        "Jetbrains Toolbox",
        "Adobe Premier Pro",
        "Adobe Photoshop",
        "Draw.io",
        "Adobe Lightroom",
    ].includes(text);

    const isGo = text === "Go";
    return (
        <motion.a
            id="iconDisplay"
            style={{
                backgroundColor: themeSwitch(!Theme.value),
                color: themeSwitch(Theme.value),
                textDecoration: "none",
            }}
            href={getLink(text)}
            target="_blank"
            whileHover={{ scale: 1.2 }}
        >
            <img
                src={getIcon(text)}
                id="iconImg"
                loading="eager"
                style={{
                    backgroundColor: isBox ? "none" : themeSwitch(Theme.value),
                    padding: isBox ? 0 : 5,
                    width: isGo ? "fit-content" : "auto",
                    height: isGo ? 50 : "100",
                }}
            />
            {text}
        </motion.a>
    );
}
