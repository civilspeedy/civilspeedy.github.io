import React from 'react';
import { Link } from 'react-router-dom';
import { homePage, scale } from '../logic/types';
import { buttonLabels } from '../logic/contentCreator';
import { useScale2D, useScaleText } from '../logic/consistencyControl';

type types = { page: homePage };

export default function Home({ page }: types): React.JSX.Element {
  const buttonNames: string[] = buttonLabels();

  const h1Size: number = useScaleText('h1');
  const btnSize: scale = useScale2D('btn');
  const btnFontSize: number = useScaleText('btnFont');

  // btnSize needs undefined handling

  return (
    <>
      <div>
        <h1 style={{ fontSize: h1Size }}>{page.h1}</h1>
        <div id='container'>
          <div id='sub'>
            <p>temp</p>
          </div>
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
