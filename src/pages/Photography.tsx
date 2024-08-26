import ImageDisplay from '../components/ImageDisplay';
import { H1 } from '../components/Text';
import { PhotographyPageT } from '../logic/types';

type Type = { page: PhotographyPageT };
export default function PhotographyPage({ page }: Type): React.JSX.Element {
  return (
    <div className='page-container'>
      <H1 text={page.h1} />
      {page.images.map((item, index) => (
        <ImageDisplay
          image={item}
          key={index}
        />
      ))}
    </div>
  );
}
