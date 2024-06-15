export default function M_ProjectDisplay({ project }) {
  const title = project.title;
  const description = project.description;
  const github = project.github;
  const icons = project.icons;
  const images = project.images;

  const links = () => {
    if (Array.isArray(github)) {
      return (
        <div>
          <p>
            links:{' '}
            {github.map((item, index) => (
              <a
                style={{ marginInline: 10 }}
                key={index}
                href={item}
              >
                Github
              </a>
            ))}
          </p>
        </div>
      );
    }
    if (github === null) {
      return (
        <div>
          <p>Apologies but the repository is private.</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Link:</p>
          <a href={github}>Github</a>
        </div>
      );
    }
  };

  return (
    <div id='mobileProject'>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>{links}</div>
    </div>
  );
}
