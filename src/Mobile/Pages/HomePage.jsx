import React, { useEffect, useState } from 'react';
import '../css/mobile.css';
import subjects from '../../assets/json/subjects.json';
import M_SelectButton from '../Components/buttons/SubjectButton';

export default function M_HomePage({ setPage }) {
  return (
    <div>
      <h1 id='top'>Charlie Slorick</h1>
      {subjects.map((item, index) => (
        <M_SelectButton
          title={item}
          key={index}
          setPage={setPage}
        />
      ))}
    </div>
  );
}
