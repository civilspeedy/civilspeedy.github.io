import { useEffect, useState } from 'react';
import M_SoftwareEngineering from './Pages/SoftwareEngineering';
import M_HomePage from './Pages/HomePage';
import M_Cinematography from './Pages/Cinematography';
import M_GraphicDesign from './Pages/GraphicDesign';
import M_VideoEditing from './Pages/VideoEditing';
import M_Photography from './Pages/Photography';
import M_AboutMe from './Pages/AboutMe';

export default function M_App() {
  const [page, setPage] = useState(null);
  const homePage = <M_HomePage setPage={setPage} />;
  const [pageComponent, setPageComponent] = useState(homePage);

  useEffect(() => {
    switch (page) {
      case 'Software Engineering':
        setPageComponent(<M_SoftwareEngineering />);
        break;
      case 'Cinematography':
        setPageComponent(<M_Cinematography />);
        break;
      case 'Graphic Design':
        setPageComponent(<M_GraphicDesign />);
        break;
      case 'Video Editing':
        setPageComponent(<M_VideoEditing />);
        break;
      case 'Photography':
        setPageComponent(<M_Photography />);
        break;
      case 'About Me':
        setPageComponent(<M_AboutMe />);
        break;
      case null:
        setPageComponent(homePage);
        break;
    }
  }, [page]);
  return pageComponent;
}
