import { ImageList, ImageListItem } from '@mui/material';

export default function GraphicDisplay({ images, project }) {
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
