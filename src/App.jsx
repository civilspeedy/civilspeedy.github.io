import React, { useEffect, useState } from 'react';
import './App.css';
import SoftwareEngineeringPage from './Components/Pages/SoftwareEngineeringPage';
import CinematographyPage from './Components/Pages/CinematographyPage';
import GraphicDesignPage from './Components/Pages/GraphicDesignPage';
import VideoEditingPage from './Components/Pages/VideoEditingPage';
import PhotographyPage from './Components/Pages/PhotographyPage';
import AboutMePage from './Components/Pages/AboutMePage';
import HomePage from './Components/Pages/HomePage';
import HomeButton from './Components/Buttons/HomeButton';
import { BrowserView, MobileView } from 'react-device-detect';
import M_HomePage from './Mobile/Pages/HomePage';

// need mobile version
export default function App() {
  const [pageState, setPageState] = useState(null);
  const homePage = <HomePage setPageState={setPageState} />;
  const [page, setPage] = useState(homePage);

  useEffect(() => {
    switch (pageState) {
      case 0:
        setPage(<SoftwareEngineeringPage />);
        break;
      case 1:
        setPage(<CinematographyPage />);
        break;
      case 2:
        setPage(<GraphicDesignPage />);
        break;
      case 3:
        setPage(<VideoEditingPage />);
        break;
      case 4:
        setPage(<PhotographyPage />);
        break;
      case 5:
        setPage(<AboutMePage />);
        break;
      default:
        setPage(homePage);
        break;
    }
  }, [pageState]);

  return (
    <>
      <BrowserView>
        <div>
          {pageState === null ? (
            <div>{page}</div>
          ) : (
            <div>
              <HomeButton
                setState={setPageState}
                originalText={'Home'}
              />
              {page}
            </div>
          )}
        </div>
      </BrowserView>
      <MobileView>
        <M_HomePage />
      </MobileView>
    </>
  );
}
