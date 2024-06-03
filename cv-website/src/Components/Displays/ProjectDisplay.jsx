import '../../App.css';
import { icons } from '../../App';
export default function ProjectDisplay({ project }) {
  return (
    <>
      <div id='projectDisplay'>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div id='iconDisplay'>
          {project.icons.map((item, index) => (
            <img
              id='miniIcon'
              src={icons[item]}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
