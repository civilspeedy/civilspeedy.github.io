import React from 'react';
import { FontSizeKey, useScaleText } from '../logic/consistencyControl';

type Text = { text: string; type: FontSizeKey }; // shouldn't be any but can't figure out for now

export default function ScalingText({ text, type }: Text): React.JSX.Element {
  const size: number = useScaleText(type);
  switch (type) {
    case 'h1':
      return <h1 style={{ fontSize: size }}>{text}</h1>;
    case 'h2':
      return <h2 style={{ fontSize: size }}>{text}</h2>;
    case 'h3':
      return <h3 style={{ fontSize: size }}>{text}</h3>;
    case 'h4':
      return <h4 style={{ fontSize: size }}>{text}</h4>;
    case 'p':
      return <p style={{ fontSize: size }}>{text}</p>;
    default:
      console.log('Err in ');
      return <p>Something went wrong</p>;
  }
}
