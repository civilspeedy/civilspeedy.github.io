import React from 'preact/compat';
import text from '../assets/json/se.json';
import LanguageDisplay from '../components/displays/LangugeDisplay';

export default function SoftwareEngineeringPage(): React.JSX.Element {
    return (
        <>
            <div>
                {text.languages.map((lang, index) => (
                    <LanguageDisplay text={lang} key={index} />
                ))}
            </div>
        </>
    );
}
