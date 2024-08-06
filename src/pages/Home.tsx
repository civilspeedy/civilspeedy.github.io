import React from 'react';
import { buttonLabels, getPage } from '../logic/ContentCreator';
import { Link } from 'react-router-dom';

export default function Home(): React.JSX.Element {
    const page: object = getPage('home');
    const buttonNames: string[] = buttonLabels();
    console.log(buttonNames);

    return (
        <>
            <div style={{ backgroundColor: 'blue' }}>
                <h1>{page.h1}</h1>
                <div id='container'>
                    <div id='sub'>
                        <p>temp</p>
                    </div>
                    <div id='sub'>
                        <div id='btnDiv'>
                            {buttonNames.map((item, index) => (
                                <Link to={'/' + item}>
                                    <button
                                        title={item}
                                        key={index}
                                    >
                                        {item}
                                    </button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
