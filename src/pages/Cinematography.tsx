import SmallDisplay from '../components/SmallDisplay';
import VideoDisplay from '../components/VideoDisplay';
import { useScaleText } from '../logic/consistencyControl';
import { page, TYPES } from '../logic/types';

export default function CinematographyPage({ page }: TYPES): React.JSX.Element {
  const h1Size = useScaleText('h1');
  const h2Size = useScaleText('h2');
  return (
    <>
      <h1 style={{ fontSize: h1Size }}>{page.h1}</h1>
      <h2 style={{ textAlign: 'center', fontSize: h2Size }}>Tools:</h2>
      <div id='smallDisplayHolder'>
        {page.tools.map((item, index) => (
          <SmallDisplay
            text={item}
            key={index}
          />
        ))}
      </div>
      <h2 style={{ textAlign: 'center', fontSize: h2Size }}>Projects:</h2>
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
