import { page, TYPES } from '../logic/types';

export default function CinematographyPage({ page }: TYPES): React.JSX.Element {
    return (
        <>
            <h1>{page.h1}</h1>
            <div>This is the Cinematography page</div>
        </>
    );
}
