import SmallDisplay from '../components/SmallDisplay';
import { softwarePage } from '../logic/types';

type types = { page: softwarePage };

export default function SoftwareEngineeringPage({
    page,
}: types): React.JSX.Element {
    return (
        <>
            <h1>{page.h1}</h1>
            {page.frameworks.map((item, index) => (
                <SmallDisplay
                    text={item}
                    key={index}
                />
            ))}
        </>
    );
}
