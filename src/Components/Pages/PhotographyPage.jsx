import '../../App.css';
import one from '../../assets/photography/1.jpg';
import two from '../../assets/photography/2.jpg';
import three from '../../assets/photography/3.jpg';
import four from '../../assets/photography/4.jpg';
import five from '../../assets/photography/5.jpg';
import six from '../../assets/photography/6.jpg';
import seven from '../../assets/photography/7.jpg';
import eight from '../../assets/photography/8.jpg';
import nine from '../../assets/photography/9.jpg';
import ten from '../../assets/photography/10.jpg';
import eleven from '../../assets/photography/11.jpg';
import twelve from '../../assets/photography/12.png';
import { ImageList, ImageListItem } from '@mui/material';
import SmallDisplay from '../Displays/SmallDisplay';

export default function PhotographyPage() {
  //mention photoshop and lightroom
  const images = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
  ];
  return (
    <>
      <div>
        <h1>/Photography Portfolio</h1>
        <div>
          <SmallDisplay title={'Photoshop'} />
        </div>
        <ImageList
          variant='masonry'
          cols={2}
          gap={8}>
          {images.map((item, index) => (
            <ImageListItem key={index}>
              <img
                srcSet={item}
                src={item}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}
