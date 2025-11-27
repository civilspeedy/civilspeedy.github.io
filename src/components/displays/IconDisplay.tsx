import React from "preact/compat";
import "./displayStyles.css";
import { themeSwitch } from "../../logic/styleManagement";
import { Theme } from "../..";
import * as m from "motion/react-m";
import links from "../../assets/json/links.json";
import { getIcon } from "../../logic/assetManagement";

type Props = { text: string };
const boxIcons: readonly string[] = [
    "Type/JavaScript",
    "Zed",
    "Jetbrains Toolbox",
    "Adobe Premier Pro",
    "Adobe Photoshop",
    "Draw.io",
    "Adobe Lightroom",
];

export default function IconDisplay({ text }: Props): React.JSX.Element {
    const isBox = boxIcons.includes(text);
    const isGo = text === "Go";

    return (
        <m.a
            id="iconDisplay"
            style={{
                backgroundColor: themeSwitch(!Theme.value),
                color: themeSwitch(Theme.value),
                textDecoration: "none",
            }}
            href={links[text]}
            target="_blank"
            whileHover={{ scale: 1.2 }}
        >
            <m.img
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
        </m.a>
    );
}
