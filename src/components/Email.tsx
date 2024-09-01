import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScalingText from './ScalingText';

type Type = { based: string };

export default function Email({ based }: Type): React.JSX.Element {
  const [email, setEmail] = useState<string>(based);

  const handleClick = () => {
    const unBased: string = atob(email);
    setEmail(unBased);
  };

  return (
    <Link
      to={'mailto:' + email}
      onClick={handleClick}>
      <ScalingText
        type='p'
        text='Email'
      />
    </Link>
  );
}
