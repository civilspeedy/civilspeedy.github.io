import '../../App.css';
import { icons } from '../../assets/js objects/icons';
import weatherWeb1 from '../../assets/softwareScreenshots/weather web 1.png';
import weatherWeb2 from '../../assets/softwareScreenshots/weather web 2.png';
import hike5 from '../../assets/softwareScreenshots/Hike 5.png';
import hike7 from '../../assets/softwareScreenshots/Hike 7.png';
import todo1 from '../../assets/softwareScreenshots/todo 1.png';
import todo2 from '../../assets/softwareScreenshots/todo 2.png';
import weatherChat1 from '../../assets/softwareScreenshots/Weather Chat 1.png';
import weatherChat2 from '../../assets/softwareScreenshots/Weather Chat 2.png';

export default function ProjectDisplay({ project, displayImages }) {
  let images = {};
  let style = 'projectDisplayMobile';
  if (displayImages) {
    style = 'projectDisplay';
    images = {
      'weather web 1': weatherWeb1,
      'weather web 2': weatherWeb2,
      'hike 5': hike5,
      'hike 7': hike7,
      'todo 1': todo1,
      'todo 2': todo2,
      'weather chat 1': weatherChat1,
      'weather chat 2': weatherChat2,
    };
  }

  // text sizing needs adjusting
  const LinkGithub = () => {
    const link = project.github;
    if (Array.isArray(link)) {
      return (
        <div>
          {link.map((item, index) => (
            <a
              style={{ marginInline: 10 }}
              key={index}
              href={item}>
              Github
            </a>
          ))}
        </div>
      );
    }
    if (link === null) {
      return (
        <div>
          <p>Apologies but the repository is private.</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Links:</p>
          <a href={link}>Github</a>
        </div>
      );
    }
  };
  return (
    <>
      <div id={style}>
        <h2>{project.title}</h2>

        {project.images.map((item, index) => (
          <img
            src={images[item]}
            key={index}
            id='projectScreenshot'
            loading='lazy'
          />
        ))}

        <div id='descContainer'>
          <p>{project.description}</p>
        </div>

        <LinkGithub />
        <p>Uses:</p>
        <div id='iconDisplay' /**maybe add glow on hover */>
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
