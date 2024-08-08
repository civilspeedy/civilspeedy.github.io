import { softwarePage } from '../logic/types';

type types = { page: softwarePage };

export default function SoftwareEngineeringPage({
    page,
}: types): React.JSX.Element {
    return (
        <>
            <h1>{page.h1}</h1>
            <div>This is the software Engineering page</div>
        </>
    );
}
