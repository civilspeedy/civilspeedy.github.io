import React from 'react';
import { buttonLabels } from '../logic/contentCreator';
import { Link } from 'react-router-dom';

type Type = { page: string };

export default function Navbar({ page }: Type): React.JSX.Element {
  const pages: string[] = buttonLabels();
  const pageWithoutCurrent: string[] = [];

  for (let item of pages) if (item !== page) pageWithoutCurrent.push(item);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '10px',
        marginTop: '20px',
        backgroundColor: '#444444',
      }}>
      <Link to={'/'}>
        <button id='navButton'>Home</button>
      </Link>
      {pageWithoutCurrent.map((item, index) => (
        <Link
          to={'/' + item}
          key={index}>
          <button id='navButton'>{item}</button>
        </Link>
      ))}
    </div>
  );
}
