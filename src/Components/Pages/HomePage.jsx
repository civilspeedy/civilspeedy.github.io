import MenuButton from '../Buttons/MenuButton';
import subjects from '../../assets/json/subjects.json';

export default function HomePage({ setPageState }) {
  return (
    <div>
      <div id='topText'>
        <h1>Charlie Slorick</h1>
        <h2>Software Engineering Student at Bournemouth University</h2>
      </div>
      <ul id='subjectList'>
        {subjects.map((text, index) => (
          <li key={index}>
            <MenuButton
              text={text}
              setButtonClicked={setPageState}
              index={index}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
