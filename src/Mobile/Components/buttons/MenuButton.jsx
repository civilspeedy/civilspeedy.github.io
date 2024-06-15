export default function M_MenuButton({ title, setPage }) {
  return (
    <button
      id='mButton'
      onClick={() => setPage(title)}
    >
      {title}
    </button>
  );
}
