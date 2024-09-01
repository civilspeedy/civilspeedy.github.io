import ImageDisplay from '../components/ImageDisplay';
import Navbar from '../components/Navbar';
import SmallDisplay from '../components/SmallDisplay';
import ScalingText from '../components/ScalingText';
import { PortfolioPage } from '../logic/types';

type Type = { page: PortfolioPage };
export default function GraphicDesignPage({ page }: Type): React.JSX.Element {
  return (
    <div className='page-container'>
      <Navbar page='Graphic Design' />
      <ScalingText
        type='h1'
        text={page.h1}
      />
      <ScalingText
        type='h2'
        text={'Tools:'}
      />
      <div id='smallDisplayHolder'>
        {page.tools.map((item, index) => (
          <SmallDisplay
            text={item}
            key={index}
          />
        ))}
      </div>

      <ScalingText
        type='h2'
        text='Projects:'
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {page.projects.map((item, index) => (
          <ImageDisplay
            image={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
