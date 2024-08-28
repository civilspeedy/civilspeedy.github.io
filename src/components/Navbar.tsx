import React from 'react';
import { buttonLabels } from '../logic/contentCreator';
import { Link } from 'react-router-dom';

type Type = { page: string };

export default function Navbar({ page }: Type): React.JSX.Element {
  // get pages and create buttons
  const pages: string[] = buttonLabels();
  const pageWithoutCurrent: string[] = [];
  let current: string = '';

  for (let item of pages) {
    if (item !== page) {
      pageWithoutCurrent.push(item);
    } else {
      current = item;
    }
  }

  // need homepage
  return (
    <div>
      <p>{current}</p>
      {pageWithoutCurrent.map((item, index) => (
        <Link
          to={'/' + item}
          key={index}>
          <button>{item}</button>
        </Link>
      ))}
    </div>
  );
}
