import React from 'react';
import { project, scale } from '../logic/types';
import { useScale2D } from '../logic/consistencyControl';

type types = { video: project };

export default function VideoDisplay({ video }: types): React.JSX.Element {
  const frameSize: scale = { width: 560, height: 315 };
  const divSize: scale = useScale2D('videoDisplay');

  return (
    <div
      id='videoDisplay'
      style={{ width: divSize.width, height: divSize.height }}>
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
      <p style={{ color: '#242424', textWrap: 'pretty' }}>
        {video.description}
      </p>
    </div>
  );
}
