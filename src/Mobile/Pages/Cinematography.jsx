import VideoDisplay from '../../Components/Displays/VideoDisplay';
import projects from '../../assets/json/videoProjects.json';
import M_HomeButton from '../Components/buttons/HomeButton';
import '../css/mobile.css';
export default function M_Cinematography({ setPage }) {
  return (
    <div>
      <h1 id='top'>/Cinematography</h1>
      <M_HomeButton setPage={setPage} />
      {projects.map((item, index) => (
        <VideoDisplay
          video={item}
          key={index}
          mobile={true}
        />
      ))}
    </div>
  );
}
