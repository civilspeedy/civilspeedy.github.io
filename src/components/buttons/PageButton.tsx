import React from 'preact/compat';
import { Theme } from '../..';

type Props = { text: string };
export default function PageButton({ text }: Props): React.JSX.Element {
    const btnStyle: React.JSX.CSSProperties = {
        backgroundColor: Theme.value ? 'black' : 'white',
        padding: 15,
        borderRadius: 20,
        color: Theme.value ? 'white' : 'black',
        textDecoration: 'none',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 'fit-content',
    };

    return (
        <a href={'/' + text} style={btnStyle}>
            {text}
        </a>
    );
}
