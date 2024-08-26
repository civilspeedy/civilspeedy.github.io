import React from 'react';
import { Link } from 'react-router-dom';
import { homePage, scale } from '../logic/types';
import { buttonLabels } from '../logic/contentCreator';
import { useScale2D, useScaleText } from '../logic/consistencyControl';
import { H1 } from '../components/Text';

type types = { page: homePage };

export default function Home({ page }: types): React.JSX.Element {
  const buttonNames: string[] = buttonLabels();

  const btnSize: scale = useScale2D('btn');
  const btnFontSize: number = useScaleText('btnFont');

  return (
    <>
      <div>
        <H1 text={page.h1} />
        <div id='container'>
          <div id='sub'></div>
          <div id='sub'>
            <div id='btnDiv'>
              {buttonNames.map((item, index) => (
                <Link
                  to={'/' + item}
                  key={index}>
                  <button
                    style={{
                      width: btnSize.width,
                      height: btnSize.height,
                      fontSize: btnFontSize,
                    }}
                    title={item}>
                    {item}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
