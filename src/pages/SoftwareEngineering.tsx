import SmallDisplay from '../components/SmallDisplay';
import { softwarePage } from '../logic/types';
import '../index.css';

type types = { page: softwarePage };

export default function SoftwareEngineeringPage({
  page,
}: types): React.JSX.Element {
  return (
    <div className='page-container'>
      <h1>{page.h1}</h1>
      <h2>Languages:</h2>
      <div id='smallDisplayHolder'>
        {page.languages.map((item, index) => (
          <SmallDisplay
            text={item}
            key={index}
          />
        ))}
      </div>
      <h2>Frameworks:</h2>
      <div id='smallDisplayHolder'>
        {page.frameworks.map((item, index) => (
          <SmallDisplay
            text={item}
            key={index}
          />
        ))}
      </div>
      <h2>Tools:</h2>
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
