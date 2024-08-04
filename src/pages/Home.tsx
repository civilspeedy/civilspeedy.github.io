import React from 'react';
import { buttonLabels, getPage } from '../logic/ContentCreator';

export default function Home(): React.JSX.Element {
    const page: object = getPage('home');
    const buttonNames: string[] = buttonLabels();

    return (
        <>
            <div>
                <h1>{page.h1}</h1>
                {buttonNames.map((item, index) => (
                    <button title={item} />
                ))}
            </div>
        </>
    );
}
