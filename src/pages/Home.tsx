import React from 'react';
import { buttonLabels } from '../logic/ContentCreator';
import { Link } from 'react-router-dom';
import { homePage } from '../logic/types';

type types = { page: homePage };

export default function Home({ page }: types): React.JSX.Element {
    const buttonNames: string[] = buttonLabels();
    console.log(buttonNames);

    //buttons need to scale

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
