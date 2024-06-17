import '../../../node_modules/video-react/dist/video-react.css';
import '../../App.css';
import videos from '../../assets/json/videoProjects.json';
import VideoDisplay from '../Displays/VideoDisplay';

export default function CinematographyPage() {
  // replace with video production containing video editing too
  return (
    <>
      <div>
        <h1>Cinematography Portfolio</h1>
        <p>
          For a detailed look at my Media Studies work please see my blogger
          pages {'--> '}
          <a
            href='https://www.blogger.com/profile/16227584340087484499'
            target='_blank'>
            Link
          </a>
        </p>
        <div id='videosContainer'>
          {videos.map((item, index) => (
            <VideoDisplay
              video={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
