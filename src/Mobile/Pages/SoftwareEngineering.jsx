import '../css/mobile.css';
import projects from '../../assets/json/softwareProjects.json';
import M_ProjectDisplay from '../Components/Displays/ProjectDisplays';
import '../css/mobile.css';
import M_HomeButton from '../Components/buttons/HomeButton';
export default function M_SoftwareEngineering({ setPage }) {
  return (
    <div>
      <h1 id='top'>/Software Engineering</h1>
      <M_HomeButton setPage={setPage} />
      <div id='projects'>
        {projects.map((item, index) => (
          <M_ProjectDisplay
            project={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
