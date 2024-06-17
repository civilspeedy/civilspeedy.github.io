import { ImageList, ImageListItem } from '@mui/material';
import A2 from '../../assets/graphicDesign/posters/A2.jpg';
import lockdown from '../../assets/graphicDesign/posters/lockdown.jpg';
import silhouette from '../../assets/graphicDesign/Website/silhouette.jpg';
import dutyCalls from '../../assets/graphicDesign/Website/website_1.png';
import theEye from '../../assets/graphicDesign/personal/theEye.png';
import theHand from '../../assets/graphicDesign/personal/theHand.png';
import wallpaper from '../../assets/graphicDesign/personal/wallpaper.jpg';

export default function GraphicDisplay({ project }) {
  const images = {
    theEye: theEye,
    theHand: theHand,
    wallpaper: wallpaper,
    A2: A2,
    lockdown: lockdown,
    silhouette: silhouette,
    dutyCalls: dutyCalls,
  };

  const ImageDisplay = () => {
    if (project.images.length == 1) {
      return (
        <img
          src={images[project.images[0]]}
          loading='lazy'
        />
      );
    } else {
      return (
        <ImageList
          variant='masonry'
          cols={2}
          gap={8}>
          {project.images.map((item, index) => (
            <ImageListItem key={index}>
              <img
                srcSet={images[item]}
                src={images[item]}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
      );
    }
  };

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ImageDisplay />
    </div>
  );
}
