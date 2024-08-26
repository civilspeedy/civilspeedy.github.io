import React from 'react';
import { useScaleText } from '../logic/consistencyControl';

type Text = { text: string };

export const H1 = ({ text }: Text): React.JSX.Element => {
  const size: number = useScaleText('h1');
  return <h1 style={{ fontSize: size }}>{text}</h1>;
};

export const H2 = ({ text }: Text) => {
  const size: number = useScaleText('h2');
  return <h2 style={{ fontSize: size }}>{text}</h2>;
};

export const P = ({ text }: Text) => {
  const size: number = useScaleText('p');
  return <p style={{ fontSize: size }}>{text}</p>;
};
