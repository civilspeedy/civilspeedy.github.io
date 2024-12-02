import { useState } from 'preact/hooks';
import { bgColour, invBgColour, Theme } from '../..';
import text from '../../assets/json/aboutMe.json';
import React from 'preact/compat';
import './displayStyles.css';

export default function AboutMe(): React.JSX.Element {
    const [email, setEmail] = useState<string>(text.email);

    const linkBtnStyle: React.JSX.CSSProperties = {
        backgroundColor: invBgColour,
        color: bgColour,
    };
    return (
        <div
            style={{
                backgroundColor: bgColour,
                color: invBgColour,
            }}
            id='aboutMeDiv'
        >
            <a href={text.linkedin} style={linkBtnStyle} id='linkBtn'>
                Linkedin
            </a>
            <a
                href={'mailto:' + email}
                style={linkBtnStyle}
                onClick={() => setEmail(atob(text.email))}
                id='linkBtn'
            >
                Email
            </a>

            <p style={{ textWrap: 'pretty' }}>{text.bio}</p>

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
        </div>
    );
}
