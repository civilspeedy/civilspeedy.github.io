import React, { useEffect, useState } from 'preact/compat';
import './buttonStyles.css';
import { themeSwitch } from '../../logic/styleManagement';
import { Theme } from '../..';

type Props = { text: string };
export default function PageButton({ text }: Props): React.JSX.Element {
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

    useEffect(() => onLeave(), [Theme.value]);

    const btnStyle: React.JSX.CSSProperties = {
        backgroundColor,
        color,
    };

    const links = {
        'Software Engineering': 'SE',
        'Video Production': 'VP',
        'Graphic Design': 'GD',
        Photography: 'PH',
    };

    return (
        <a
            href={'/' + links[text]}
            style={btnStyle}
            id='pageButton'
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            {text}
        </a>
    );
}