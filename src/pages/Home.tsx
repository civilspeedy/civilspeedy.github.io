import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { homePage, scale } from '../logic/types';
import { buttonLabels } from '../logic/contentCreator';
import { scaleContent, scaleText } from '../logic/contentScaler';

type types = { page: homePage };

export default function Home({ page }: types): React.JSX.Element {
  const buttonNames: string[] = buttonLabels();
  const orginalScale: scale = { height: 20, width: 50 };
  const [btnScale, setBtnScale] = useState<scale>(scaleContent(orginalScale));
  const orginalFont: number = 10;
  const [btnFont, setBtnFont] = useState<number>(orginalFont);

  useEffect(() => {
    const scaleAll = () => {
      setBtnScale(scaleContent(orginalScale));
      setBtnFont(scaleText(orginalFont)); // needs max size
    };

    scaleAll();

    window.addEventListener('resize', scaleAll);

    return () => window.removeEventListener('resize', scaleAll);
  }, []);

  return (
    <>
      <div>
        <h1>{page.h1}</h1>
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
                      width: btnScale.width,
                      height: btnScale.height,
                      fontSize: btnFont,
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
