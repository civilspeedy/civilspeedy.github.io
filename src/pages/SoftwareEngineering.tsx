import SmallDisplay from '../components/SmallDisplay';
import { getIcons } from '../logic/imageAquire';
import { softwarePage } from '../logic/types';

type types = { page: softwarePage };

export default function SoftwareEngineeringPage({
  page,
}: types): React.JSX.Element {
  const frameworks: string[] = getIcons('frameworks');
  return (
    <>
      <h1>{page.h1}</h1>
      {page.frameworks.map((item, index) => (
        <SmallDisplay
          text={item}
          image={frameworks[index]}
          key={index}
        />
      ))}
    </>
  );
}
