import React from 'preact/compat';
import text from '../assets/json/se.json';
import IconDisplay from '../components/displays/IconDisplay';
import ThemeButton from '../components/buttons/ThemeButton';

export default function SoftwareEngineeringPage(): React.JSX.Element {
    return (
        <>
            <ThemeButton />
            <h2>Languages</h2>
            <div id='iconDiv'>
                {text.languages.map((lang, index) => (
                    <IconDisplay
                        text={lang}
                        key={index}
                    />
                ))}
            </div>
            <h2>Frameworks</h2>
            <div id='iconDiv'>
                {text.frameworks.map((fw, index) => (
                    <IconDisplay
                        text={fw}
                        key={index}
                    />
                ))}
            </div>
            <h2>Tools</h2>
            <div id='iconDiv'>
                {text.tools.map((tool, index) => (
                    <IconDisplay
                        text={tool}
                        key={index}
                    />
                ))}
            </div>
        </>
    );
}
