import AboutMePage from '../../Components/Pages/AboutMePage';

export default function M_AboutMe({ setPage }) {
  return (
    <div>
      <AboutMePage
        isMobile={true}
        setPage={setPage}
      />
    </div>
  );
}
