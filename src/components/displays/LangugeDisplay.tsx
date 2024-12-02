import React from 'preact/compat';
import { bgColour, invBgColour } from '../..';

type Props = { text: string };
export default function LanguageDisplay({ text }: Props): React.JSX.Element {
    return (
        <a
            style={{
                backgroundColor: bgColour,
                color: invBgColour,
            }}
        >
            {text}
        </a>
    );
}
