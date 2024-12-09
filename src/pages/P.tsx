import React from 'preact/compat';
import './pageStyle.css';
import text from '../assets/json/ph.json';
import IconDisplay from '../components/displays/IconDisplay';

export function PhotographyPage(): React.JSX.Element {
    return (
        <div id='page'>
            <h2>Tools</h2>
            <div id='iconDiv'>
                {text.tools.map((tool, index) => (
                    <IconDisplay
                        text={tool}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
}
