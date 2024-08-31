import SmallDisplay from '../components/SmallDisplay';
import { softwarePage } from '../logic/types';
import '../index.css';
import { H1, H2 } from '../components/Text';
import Navbar from '../components/Navbar';

type types = { page: softwarePage };

export default function SoftwareEngineeringPage({
  page,
}: types): React.JSX.Element {
  return (
    <div className='page-container'>
      <Navbar page='Software Engineering' />
      <H1 text={page.h1} />
      <a href='https://github.com/civilspeedy'>Github</a>
      <H2 text='Languages:' />
      <div id='smallDisplayHolder'>
        {page.languages.map((item, index) => (
          <SmallDisplay
            text={item}
            key={index}
          />
        ))}
      </div>
      <H2 text='Frameworks:' />
      <div id='smallDisplayHolder'>
        {page.frameworks.map((item, index) => (
          <SmallDisplay
            text={item}
            key={index}
          />
        ))}
      </div>
      <H2 text='Tools:' />
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
