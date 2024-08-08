import React from 'react';
import { aboutMePage } from '../logic/types';
type TYPES = { page: aboutMePage };
export default function AboutMePage({ page }: TYPES): React.JSX.Element {
    return (
        <>
            <h1>{page.h1}</h1>
            <div>This is the About Me page</div>
        </>
    );
}
