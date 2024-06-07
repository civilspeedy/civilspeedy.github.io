import '../../App.css';
import SmallDisplay from '../Displays/SmallDisplay';
import videos from '../../assets/json/videoProjects.json';
import VideoDisplay from '../Displays/VideoDisplay';

export default function VideoEditingPage() {
  return (
    <>
      <div>
        <h1>/Video Editing Portfolio</h1>
        <h2>Tools Experience:</h2>
        <div id='displayArea'>
          <SmallDisplay title={'Vegas'} />
          <SmallDisplay title={'Premiere Pro'} />
        </div>
        <div id='videosContainer'>
          <h2>Work:</h2>
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
