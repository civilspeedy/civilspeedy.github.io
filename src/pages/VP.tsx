import React from 'preact/compat';
import text from '../assets/json/vp.json';
import IconDisplay from '../components/displays/IconDisplay';
import VideoDisplay from '../components/displays/VideoDisplay';

export default function VideoProductionPage(): React.JSX.Element {
    return (
        <>
            <h2>Tools</h2>
            {text.tools.map((tool, index) => (
                <IconDisplay text={tool} key={index} />
            ))}

            {text.projects.map((proj, index) => (
                <VideoDisplay link={proj.link} key={index} />
            ))}
        </>
    );
}
