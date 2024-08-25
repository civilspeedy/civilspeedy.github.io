import React from 'react';
import { Link } from 'react-router-dom';
import { homePage } from '../logic/types';
import { buttonLabels } from '../logic/contentCreator';
import useScale from '../logic/consistencyControl';

type types = { page: homePage };

export default function Home({ page }: types): React.JSX.Element {
  const buttonNames: string[] = buttonLabels();

  const { h1Size, h2Size, pSize, btnFontSize, btnSize } = useScale(true);

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
