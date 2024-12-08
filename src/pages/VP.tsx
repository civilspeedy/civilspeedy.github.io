import React from 'preact/compat';
import text from '../assets/json/vp.json';
import IconDisplay from '../components/displays/IconDisplay';
import VideoDisplay from '../components/displays/VideoDisplay';
import './pageStyle.css';

export default function VideoProductionPage(): React.JSX.Element {
    return (
        <div id='page'>
            <div id='iconDiv'>
                <h2>Tools</h2>
                {text.tools.map((tool, index) => (
                    <IconDisplay text={tool} key={index} />
                ))}
            </div>
            <div id='videoDiv'>
                {text.projects.map((proj, index) => (
                    <VideoDisplay link={proj.link} key={index} />
                ))}
            </div>
        </div>
    );
}
