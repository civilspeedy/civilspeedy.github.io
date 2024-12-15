import { Theme } from "../..";
import text from "../../assets/json/aboutMe.json";
import React from "preact/compat";
import "./displayStyles.css";
import { themeSwitch } from "../../logic/styleManagement";
import { motion } from "motion/react";

export default function AboutMe(): React.JSX.Element {
    return (
        <motion.div
            initial={{ x: "-50%", y: "-50%" }}
            style={{
                backgroundColor: themeSwitch(Theme.value),
                color: themeSwitch(!Theme.value),
            }}
            id="aboutMeDiv"
        >
            <p style={{ textWrap: "pretty" }}>{text.bio}</p>

            {text.education.map((edu, index) => (
                <div key={index}>
                    <h2>{edu.name}</h2>
                    <ul>
                        {edu.subjects.map((sub, subIndex) => (
                            <li key={subIndex}>
                                {sub.subject}: {sub.grade}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </motion.div>
    );
}
