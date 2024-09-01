import Navbar from '../components/Navbar';
import SmallDisplay from '../components/SmallDisplay';
import ScalingText from '../components/ScalingText';
import VideoDisplay from '../components/VideoDisplay';
import { CinemaPage } from '../logic/types';

type Type = { page: CinemaPage };

export default function CinematographyPage({ page }: Type): React.JSX.Element {
  return (
    <div className='page-container'>
      <Navbar page='Video Production' />
      <ScalingText
        type='h1'
        text={page.h1}
      />
      <ScalingText
        type='h2'
        text='Tools:'
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
