import React from 'react';
import { aboutMePage } from '../logic/types';
import { H1, P } from '../components/Text';
type TYPES = { page: aboutMePage };
export default function AboutMePage({ page }: TYPES): React.JSX.Element {
  return (
    <div className='page-container'>
      <H1 text={page.h1} />
      <div>
        {page.bio.map((item, index) => (
          <P
            text={item}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
