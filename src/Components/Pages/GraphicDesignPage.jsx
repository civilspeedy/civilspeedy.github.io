import '../../App.css';
import graphicProjects from '../../assets/json/graphicDesignProjects.json';
import theEye from '../../assets/graphicDesign/personal/theEye.png';
import theHand from '../../assets/graphicDesign/personal/theHand.png';
import wallpaper from '../../assets/graphicDesign/personal/wallpaper.jpg';
import GraphicDisplay from '../Displays/GraphicDisplay';
import A2 from '../../assets/graphicDesign/posters/A2.jpg';
import lockdown from '../../assets/graphicDesign/posters/lockdown.jpg';
import silhouette from '../../assets/graphicDesign/Website/silhouette.jpg';
import dutyCalls from '../../assets/graphicDesign/Website/website_1.png';
import SmallDisplay from '../Displays/SmallDisplay';

export default function GraphicDesignPage() {
  const images = {
    theEye: theEye,
    theHand: theHand,
    wallpaper: wallpaper,
    A2: A2,
    lockdown: lockdown,
    silhouette: silhouette,
    dutyCalls: dutyCalls,
  };

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
            images={images}
            project={item}
            key={index}
          />
        ))}
      </div>
    </>
  );
}