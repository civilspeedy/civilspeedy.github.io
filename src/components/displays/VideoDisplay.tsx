import React from 'preact/compat';
import ReactPlayer from 'react-player';
import { Theme } from '../..';
import { themeSwitch } from '../../logic/styleManagement';
import './displayStyles.css';

type Props = { link: string };
export default function VideoDisplay({ link }: Props): React.JSX.Element {
    // needs controls
    return (
        <div
            id='videoDisplay'
            style={{
                backgroundColor: themeSwitch(!Theme.value),
            }}
        >
            <ReactPlayer
                url={'https://www.youtube.com/watch?v=' + link}
                controls={true}
            />
        </div>
    );
}
