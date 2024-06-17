import '../../App.css';
import graphicProjects from '../../assets/json/graphicDesignProjects.json';
import GraphicDisplay from '../Displays/GraphicDisplay';

import SmallDisplay from '../Displays/SmallDisplay';

export default function GraphicDesignPage() {
  // images probably could do with resizing
  return (
    <>
      <div>
        <h1>/Graphic Design Portfolio</h1>
        <p>
          For a detailed look at my Media Studies work please see my blogger
          pages {'--> '}
          <a
            href='https://www.blogger.com/profile/16227584340087484499'
            target='_blank'>
            Link
          </a>
        </p>
        <h2>Tools Experience:</h2>
        <div id='displayArea'>
          <SmallDisplay title={'Photoshop'} />
        </div>
        {graphicProjects.map((item, index) => (
          <GraphicDisplay
            project={item}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
