import React from 'preact/compat';
import { bgColour, invBgColour } from '../..';
import { getIcon, getLink } from '../../logic/assetManagement';
import './displayStyles.css';

type Props = { text: string };
export default function IconDisplay({ text }: Props): React.JSX.Element {
    return (
        <a
            id='languageDisplay'
            style={{
                backgroundColor: bgColour,
                color: invBgColour,
                textDecoration: 'none',
            }}
            href={getLink(text)}
            target='_blank'
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
