import React from 'react';
import { Link } from 'react-router-dom';
import { aboutMePage, PageBasic, scale } from '../logic/types';
import { useScale2D, useScaleText } from '../logic/consistencyControl';
import ScalingText from '../components/ScalingText';
import Email from '../components/Email';
import { isBrowser } from 'react-device-detect';

type types = {
  page: PageBasic;
  buttonLabels: () => string[];
  getPage: (name: string) => any;
};

export default function Home({
  page,
  buttonLabels,
  getPage,
}: types): React.JSX.Element {
  const buttonNames: string[] = buttonLabels();
  let btnSize: scale = useScale2D('btn');
  let btnFontSize: number = useScaleText('btnFont');
  let aboutMe: aboutMePage = getPage('About Me');

  return (
    <>
      <div>
        <ScalingText
          type='h1'
          text={page.h1}
        />
        <div id='container'>
          {isBrowser && (
            <div id='sub'>
              <div id='aboutMe'>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                  }}>
                  <Link to={aboutMe.linkedin}>
                    <ScalingText
                      type='p'
                      text='LinkedIn'
                    />
                  </Link>
                  <Email based={aboutMe.email} />
                </div>
                <ScalingText
                  type='p'
                  text={aboutMe.bio}
                />
                {aboutMe.education.map((item, index) => (
                  <div
                    key={index}
                    style={{ marginBottom: '10px' }}>
                    <ScalingText
                      type='h4'
                      text={item.name}
                    />
                    {item.subjects.map((subItem, subDex) => (
                      <ScalingText
                        type='p'
                        text={subItem.subject + ' - ' + subItem.grade}
                        key={subDex}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

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
                      alignSelf: 'center',
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
