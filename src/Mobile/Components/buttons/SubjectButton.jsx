import '../../css/mobile.css';
export default function M_SelectButton({ title, setPage }) {
  return (
    <button
      id='mButton'
      onClick={() => setPage(title)}>
      {title}
    </button>
  );
}
