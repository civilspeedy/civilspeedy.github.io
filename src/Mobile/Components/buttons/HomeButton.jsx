export default function M_HomeButton({ setPage }) {
  return (
    <button
      id='mobileHomeButton'
      onClick={() => setPage(null)}>
      Home
    </button>
  );
}
