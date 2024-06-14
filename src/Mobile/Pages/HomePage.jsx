import React, { useState } from 'react';
import '../css/mobile.css';
import subjects from '../../assets/json/subjects.json';
import M_MenuButton from '../Components/MenuButton';

export default function M_HomePage() {
  const [page, setPage] = useState(null);
  return (
    <div>
      <h1 id='top'>Charlie Slorick</h1>

      {subjects.map((item, index) => (
        <M_MenuButton
          title={item}
          key={index}
        />
      ))}
    </div>
  );
}
