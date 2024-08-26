import React from 'react';
import { aboutMePage } from '../logic/types';
import { H1, H2, H3, P } from '../components/Text';
type TYPES = { page: aboutMePage };
export default function AboutMePage({ page }: TYPES): React.JSX.Element {
  return (
    <div className='page-container'>
      <H1 text={page.h1} />
      <div id='aboutMe'>
        <H2 text='Contact:' />
        <a href='https://www.linkedin.com/in/charlie-slorick-87a758259/'>
          Linkedin
        </a>
        <H2 text='Bio:' />
        {page.bio.map((item, index) => (
          <P
            text={item}
            key={index}
          />
        ))}
        <H2 text='Education' />
        {page.education.map((item, index) => (
          <div key={index}>
            <H3 text={item.name} />
            {item.subjects.map((subject, subDex) => (
              <div key={subDex}>
                <P
                  text={
                    'Subject: ' + subject.subject + ' Grade: ' + subject.grade
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
