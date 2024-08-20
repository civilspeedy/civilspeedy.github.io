import { TYPES } from '../logic/types';

export default function PhotographyPage({ page }: TYPES): React.JSX.Element {
    return (
        <>
            <h1>{page.h1}</h1>
            <div>This is the Photography page</div>
        </>
    );
}
