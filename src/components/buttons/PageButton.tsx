import React from 'preact/compat';
import { bgColour, invBgColour } from '../..';
import './buttonStyles.css';

type Props = { text: string };
export default function PageButton({ text }: Props): React.JSX.Element {
    const btnStyle: React.JSX.CSSProperties = {
        backgroundColor: bgColour,
        color: invBgColour,
    };

    const links = {
        'Software Engineering': 'SE',
        'Video Production': 'VP',
        'Graphic Design': 'GD',
        Photography: 'PH',
    };

    return (
        <a href={'/' + links[text]} style={btnStyle} id='pageButton'>
            {text}
        </a>
    );
}
