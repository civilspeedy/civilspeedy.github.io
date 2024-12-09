import React from 'preact/compat';
import PageButton from '../components/buttons/PageButton';
import AboutMe from '../components/displays/AboutMe';
import './pageStyle.css';

export default function Home(): React.JSX.Element {
    const labels: readonly string[] = [
        'Software Engineering',
        'Video Production',
        'Graphic Design',
        'Photography',
    ];
    return (
        <>
            <div>
                <h1>Charlie Slorick</h1>
                <div id='btnDiv'>
                    {labels.map((item, key) => (
                        <PageButton
                            text={item}
                            key={key}
                        />
                    ))}
                </div>
                <AboutMe />
            </div>
        </>
    );
}
