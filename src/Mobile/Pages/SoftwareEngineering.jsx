import '../css/mobile.css';
import projects from '../../assets/json/softwareProjects.json';
import M_ProjectDisplay from '../Components/Displays/ProjectDisplays';
import '../css/mobile.css';
export default function M_SoftwareEngineering() {
  return (
    <div>
      <h1 id='top'>/Software Engineering</h1>
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
