import React from 'react';
import { project, scale } from '../logic/types';
import { useScale2D } from '../logic/consistencyControl';
import ReactPlayer from 'react-player';
import { getVideo } from '../logic/VideoAquire';

type types = { video: project };

export default function VideoDisplay({ video }: types): React.JSX.Element {
  const frameSize: scale = { width: 560, height: 315 };
  const divSize: scale = useScale2D('videoDisplay');

  return (
    <div
      id='videoDisplay'
      style={{ width: divSize.width, height: divSize.height }}>
      <h2 style={{ textAlign: 'center', color: '#242424' }}>{video.title}</h2>
      <ReactPlayer
        url={getVideo(video.title)}
        controls={true}
        width={frameSize.width}
        height={frameSize.height}
      />
      <p style={{ color: '#242424', textWrap: 'pretty' }}>
        {video.description}
      </p>
    </div>
  );
}
