import React from 'preact/compat';
import ThemeButton from '../../components/buttons/ThemeButton';
import PageButton from '../../components/buttons/PageButton';
import AboutMe from '../../components/displays/AboutMe';

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
                <ThemeButton />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        position: 'absolute',
                        right: '20%',
                        top: '30%',
                    }}
                >
                    {labels.map((item, key) => (
                        <PageButton text={item} key={key} />
                    ))}
                </div>
                <AboutMe />
            </div>
        </>
    );
}
