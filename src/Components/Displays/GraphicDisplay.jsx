import { ImageList, ImageListItem } from '@mui/material';

export default function GraphicDisplay({ images, project }) {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ImageList>
        {project.images.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={images[item]}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
