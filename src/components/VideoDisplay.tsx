import React from 'react';
import { project, scale } from '../logic/types';
import { useScale2D } from '../logic/consistencyControl';
import ReactPlayer from 'react-player';
import ScalingText from './ScalingText';
import { getVideo } from '../logic/VideoAcquire';

type types = { video: project };

export default function VideoDisplay({ video }: types): React.JSX.Element {
  const frameSize: scale = { width: 560, height: 315 };
  const divSize: scale = useScale2D('videoDisplay');

  return (
    <div
      id='videoDisplay'
      style={{ width: divSize.width, height: divSize.height }}>
      <ScalingText
        type='h2'
        text={video.title}
      />
      <ReactPlayer
        url={getVideo(video.title)} // needs type
        controls={true}
        width={frameSize.width}
        height={frameSize.height}
      />
      <ScalingText
        type='p'
        text={video.description}
      />
    </div>
  );
}
