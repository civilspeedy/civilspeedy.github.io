import React, { useState } from 'react';
import { project, scale } from '../logic/types';

type types = { video: project };

export default function VideoDisplay({ video }: types): React.JSX.Element {
  const originalFrameSize: scale = { width: 560, height: 315 };
  const [frameSize, setFrameSize] = useState<scale>(originalFrameSize);
  // needs scaling

  return (
    <div id='videoDisplay'>
      <h2 style={{ textAlign: 'center', color: '#242424' }}>{video.title}</h2>
      <iframe
        width={frameSize.width}
        height={frameSize.height}
        src={'https://www.youtube-nocookie.com/embed/' + video.link}
        title={video.title}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      />
      <p style={{ color: '#242424', maxWidth: '50%' }}>{video.description}</p>
    </div>
  );
}
