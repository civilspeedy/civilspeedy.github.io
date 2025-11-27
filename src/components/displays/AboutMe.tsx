import { Theme } from "../..";
import text from "../../assets/json/aboutMe.json";
import React from "preact/compat";
import "./displayStyles.css";
import { themeSwitch } from "../../logic/styleManagement";
import * as m from "motion/react-m";

export default function AboutMe(): React.JSX.Element {
    return (
        <m.div
            initial={{ x: "-50%", y: "-50%" }}
            style={{
                backgroundColor: themeSwitch(Theme.value),
                color: themeSwitch(!Theme.value),
            }}
            id="aboutMeDiv"
        >
            <m.h2>About Me</m.h2>
            <m.p style={{ textWrap: "pretty" }}>{text.bio}</m.p>

            {text.education.map((edu, index) => (
                <m.div key={index}>
                    <m.h2>{edu.name}</m.h2>
                    <m.ul>
                        {edu.subjects.map((sub, subIndex) => (
                            <m.li key={subIndex}>
                                {sub.subject}: {sub.grade}
                            </m.li>
                        ))}
                    </m.ul>
                </m.div>
            ))}
        </m.div>
    );
}
