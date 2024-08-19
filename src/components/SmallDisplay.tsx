import React from 'react';
import { getIcons } from '../logic/imageAquire';

type types = { text: string };

export default function SmallDisplay({ text }: types): React.JSX.Element {
    return (
        <div>
            <img
                src={getIcons(text)}
                loading='eager'
                alt='icon'
            />
            <p>{text}</p>
        </div>
    );
}
