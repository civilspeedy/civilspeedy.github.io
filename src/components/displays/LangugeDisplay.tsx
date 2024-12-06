import React from 'preact/compat';
import { bgColour, invBgColour } from '../..';
import { getIcon } from '../../logic/assetManagement';
import './displayStyles.css';

type Props = { text: string };
export default function LanguageDisplay({ text }: Props): React.JSX.Element {
    return (
        <a
            id='languageDisplay'
            style={{
                backgroundColor: bgColour,
                color: invBgColour,
            }}
        >
            <img
                src={getIcon(text)}
                loading='eager'
                style={{ width: 100, height: 100 }}
            />
            {text}
        </a>
    );
}
