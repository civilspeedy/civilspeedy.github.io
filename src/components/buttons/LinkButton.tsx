import React from "preact/compat";
import * as m from "motion/react-m";
import { Theme } from "../..";
import menuLinks from "../../assets/json/menuLinks.json";

type Props = { text: string };

export default function LinkButton({ text }: Props): React.JSX.Element {
    let link = "";

    if (text === "Email") {
        link = "mailto:" + atob(menuLinks[text]);
    } else {
        link = menuLinks[text];
    }

    const target = (): string => {
        const newTabs: readonly string[] = ["Email", "Linkedin", "GitHub"];
        return newTabs.includes(text) ? "_blank" : "_self";
    };

    return (
        <m.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={link}
            style={{ color: Theme.value ? "white" : "black" }}
            target={target()}
        >
            {text}
        </m.a>
    );
}
