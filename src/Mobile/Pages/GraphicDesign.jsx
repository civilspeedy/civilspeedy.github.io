import M_HomeButton from '../Components/buttons/HomeButton';
import '../css/mobile.css';
import projects from '../../assets/json/graphicDesignProjects.json';
import GraphicDisplay from '../../Components/Displays/GraphicDisplay';

export default function M_GraphicDesign({ setPage }) {
  // alignment is off
  return (
    <div>
      <h1 id='top'>/Graphic Design</h1>
      <div style={{ margin: '15%' }} />
      <M_HomeButton setPage={setPage} />
      <div id='displayAreaMobile'>
        {projects.map((item, index) => (
          <GraphicDisplay
            project={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
