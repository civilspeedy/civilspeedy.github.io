import React, { useEffect, useState } from 'preact/compat';
import { themeSwitch } from '../../logic/styleManagement';
import { Theme } from '../..';
import './buttonStyles.css';

type Props = { text: string; link: string };
export default function LinkButton({ text, link }: Props): React.JSX.Element {
    const [backgroundColor, setBackgroundColor] = useState<string>(
        themeSwitch(Theme.value)
    );

    const [color, setColor] = useState<string>(themeSwitch(!Theme.value));

    const onEnter = () => {
        setBackgroundColor(themeSwitch(!Theme.value));
        setColor(themeSwitch(Theme.value));
    };

    const onLeave = () => {
        setBackgroundColor(themeSwitch(Theme.value));
        setColor(themeSwitch(!Theme.value));
    };

    const getLink = () => (text === 'Email' ? 'mailto:' + atob(link) : link);

    useEffect(() => onLeave(), [Theme.value]);

    const linkBtnStyle: React.JSX.CSSProperties = {
        backgroundColor,
        color,
    };

    return (
        <a
            href={getLink()}
            style={linkBtnStyle}
            id='linkBtn'
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            {text}
        </a>
    );
}
