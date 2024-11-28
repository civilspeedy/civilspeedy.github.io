import { useState } from 'preact/hooks';
import { Theme } from '../..';
import text from '../../assets/json/aboutMe.json';
import React from 'preact/compat';

export default function AboutMe(): React.JSX.Element {
    const [email, setEmail] = useState<string>(text.email);

    const linkBtnStyle: React.JSX.CSSProperties = {
        backgroundColor: Theme.value ? 'white' : 'black',
        color: Theme.value ? 'black' : 'white',
        padding: 10,
        borderRadius: 20,
        margin: 10,
        textDecoration: 'none',
    };
    return (
        <div
            style={{
                backgroundColor: Theme.value ? 'black' : 'white',
                color: Theme.value ? 'white' : 'black',
                padding: 10,
                borderRadius: 20,
                position: 'absolute',
                width: '40%',
                left: '10%',
                top: '25%',
                gap: 30,
            }}
        >
            <a href={text.linkedin} style={linkBtnStyle}>
                Linkedin
            </a>
            <a
                href={'mailto:' + email}
                style={linkBtnStyle}
                onClick={() => setEmail(atob(text.email))}
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
