import '../../App.css';
import { icons } from '../../App';
export default function ProjectDisplay({ project }) {
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
              href={item}
            >
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
          <a href={link}>Github</a>
        </div>
      );
    }
  };
  return (
    <>
      <div id='projectDisplay'>
        <h2>{project.title}</h2>
        <div id='descContainer'>
          <p style={{ maxWidth: '50%' }}>{project.description}</p>
        </div>
        <p>Links:</p>
        <LinkGithub />
        <p>Uses:</p>
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
