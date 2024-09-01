import duty_calls_video from '../assets/videos/Duty Calls.mp4';
import silhouette_video from '../assets/videos/Silhouette Trailer.mp4';
import table_top_video from '../assets/videos/Table Top.mp4';
import the_deal_video from '../assets/videos/The Deal.mp4';

const videos: object = {
  Silhouette: silhouette_video,
  'Duty Calls': duty_calls_video,
  'Finest Day': table_top_video,
  'The Deal': the_deal_video,
};

type VideoKey = keyof typeof videos;

export function getVideo(name: VideoKey): string {
  try {
    return videos[name];
  } catch (e) {
    console.error('Err in getVideo: ', e);
    return '';
  }
}
