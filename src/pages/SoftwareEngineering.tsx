import SmallDisplay from '../components/SmallDisplay';
import { softwarePage } from '../logic/types';
import '../index.css';
import { useScaleText } from '../logic/consistencyControl';

type types = { page: softwarePage };

export default function SoftwareEngineeringPage({
  page,
}: types): React.JSX.Element {
  const h1Size: number = useScaleText('h1');
  const h2Size: number = useScaleText('h2');

  return (
    <div className='page-container'>
      <h1 style={{ fontSize: h1Size }}>{page.h1}</h1>
      <h2 style={{ fontSize: h2Size }}>Languages:</h2>
      <div id='smallDisplayHolder'>
        {page.languages.map((item, index) => (
          <SmallDisplay
            text={item}
            key={index}
          />
        ))}
      </div>
      <h2 style={{ fontSize: h2Size }}>Frameworks:</h2>
      <div id='smallDisplayHolder'>
        {page.frameworks.map((item, index) => (
          <SmallDisplay
            text={item}
            key={index}
          />
        ))}
      </div>
      <h2 style={{ fontSize: h2Size }}>Tools:</h2>
      <div id='smallDisplayHolder'>
        {page.tools.map((item, index) => (
          <SmallDisplay
            text={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
