import React from 'preact/compat';
import ReactPlayer from 'react-player';

type Props = { link: string };
export default function VideoDisplay({ link }: Props): React.JSX.Element {
    // needs controls
    return <ReactPlayer url={'https://www.youtube.com/watch?v=' + link} />;
}
