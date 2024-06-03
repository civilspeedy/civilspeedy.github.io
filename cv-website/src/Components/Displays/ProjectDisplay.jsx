import '../../App.css';
import { icons } from '../../App';
export default function ProjectDisplay({ title, iconsInUse }) {
  // a component for displaying software projects

  return (
    <>
      <div id='projectDisplay'>
        <h2>{title}</h2>
        <p>test</p>
        <div id='iconDisplay'>
          {iconsInUse.map((item, index) => (
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
