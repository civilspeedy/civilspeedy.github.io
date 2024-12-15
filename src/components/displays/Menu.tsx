import React, { useEffect } from "preact/compat";
import { motion } from "motion/react";
import { Theme } from "../..";
import "./displayStyles.css";
import { animate } from "motion";
import { pages } from "../../logic/assetManagement";
import LinkButton from "../buttons/LinkButton";

type Props = { state: boolean };
export default function Menu({ state }: Props): React.JSX.Element {
    useEffect(() => {
        state
            ? animate("#sideMenu", { x: -2, opacity: 1 })
            : animate("#sideMenu", { x: "100%", opacity: 0 });
    }, [state]);
    return (
        <motion.div
            id="sideMenu"
            style={{
                backgroundColor: Theme.value ? "black" : "white",
            }}
        >
            <LinkButton text="Home" />
            {pages.map((page, index) => (
                <LinkButton text={page} key={index} />
            ))}

            <LinkButton text="Linkedin" />
            <LinkButton text="GitHub" />
            <LinkButton text="Email" />
        </motion.div>
    );
}
