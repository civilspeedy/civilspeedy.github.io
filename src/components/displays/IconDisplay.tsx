import React from 'preact/compat';
import { getIcon, getLink } from '../../logic/assetManagement';
import './displayStyles.css';
import { themeSwitch } from '../../logic/styleManagement';
import { Theme } from '../..';

type Props = { text: string };
export default function IconDisplay({ text }: Props): React.JSX.Element {
    return (
        <a
            id='languageDisplay'
            style={{
                backgroundColor: themeSwitch(!Theme.value),
                color: themeSwitch(Theme.value),
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
