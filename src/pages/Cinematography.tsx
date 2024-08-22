import SmallDisplay from '../components/SmallDisplay';
import VideoDisplay from '../components/VideoDisplay';
import { page, TYPES } from '../logic/types';

export default function CinematographyPage({ page }: TYPES): React.JSX.Element {
  return (
    <>
      <h1>{page.h1}</h1>
      <h2 style={{ textAlign: 'center' }}>Tools:</h2>
      <div id='smallDisplayHolder'>
        {page.tools.map((item, index) => (
          <SmallDisplay
            text={item}
            key={index}
          />
        ))}
      </div>
      <h2 style={{ textAlign: 'center' }}>Projects:</h2>
      <div>
        {page.projects.map((item, index) => (
          <VideoDisplay
            video={item}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
