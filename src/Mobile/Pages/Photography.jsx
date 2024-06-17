import PhotographyPage from '../../Components/Pages/PhotographyPage';

export default function M_Photography({ setPage }) {
  return (
    <div>
      <PhotographyPage
        isMobile={true}
        setPage={setPage}
      />
    </div>
  );
}
