import '../../App.css';
import graphicProjects from '../../assets/json/graphicDesignProjects.json';
import theEye from '../../assets/graphicDesign/personal/theEye.png';
import theHand from '../../assets/graphicDesign/personal/theHand.png';
import wallpaper from '../../assets/graphicDesign/personal/wallpaper.jpg';
import GraphicDisplay from '../Displays/GraphicDisplay';

export default function GraphicDesignPage() {
  const images = {
    theEye: theEye,
    theHand: theHand,
    wallpaper: wallpaper,
  };

  return (
    <>
      <div>
        <h1>/Graphic Design Portfolio</h1>
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
