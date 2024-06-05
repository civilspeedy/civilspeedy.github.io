import { ImageList, ImageListItem } from '@mui/material';

export default function GraphicDisplay({ images, project }) {
  // maybe only use Image list if there's more than one item
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ImageList
        variant='masonry'
        cols={2}
        gap={8}>
        {project.images.map((item, index) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${images[item]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${images[item]}?w=164&h=164&fit=crop&auto=format`}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
