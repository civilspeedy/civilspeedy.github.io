import SmallDisplay from '../components/SmallDisplay';
import { H1, H2 } from '../components/Text';
import VideoDisplay from '../components/VideoDisplay';
import { CinemaPage } from '../logic/types';

type Type = { page: CinemaPage };

export default function CinematographyPage({ page }: Type): React.JSX.Element {
  return (
    <div className='page-container'>
      <H1 text={page.h1} />
      <H2 text='Tools:' />
      <div id='smallDisplayHolder'>
        {page.tools.map((item, index) => (
          <SmallDisplay
            text={item}
            key={index}
          />
        ))}
      </div>
      <H2 text='Projects:' />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        {page.projects.map((item, index) => (
          <VideoDisplay
            video={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
