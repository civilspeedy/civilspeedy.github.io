import React, { useEffect, useState } from 'react';
import { getIcons } from '../logic/imageAquire';
import { scale } from '../logic/types';

type types = { text: string };

export default function SmallDisplay({ text }: types): React.JSX.Element {
    const originalDivSize: scale = { width: 10, height: 10 };
    const [divSize, setDivSize] = useState<scale>(originalDivSize);

    useEffect(() => {
        const scaler = () => {
            setDivSize(originalDivSize);
        };
    }, []);
    return (
        <div id='smallDisplay'>
            <img
                style={{ backgroundColor: 'white' }}
                src={getIcons(text)}
                loading='eager'
                alt='icon'
            />
            <p style={{ backgroundColor: 'white', color: '#242424' }}>{text}</p>
        </div>
    );
}
