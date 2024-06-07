import '../../App.css';
import aboutMe from '../../assets/json/aboutMe.json';
import EducationDisplay from '../Displays/EducationDisplay';

export default function AboutMePage() {
  const name = aboutMe.name;
  const education = aboutMe.education;
  console.log('name: ', name, ' education: ', education);

  return (
    <>
      <div>
        <h1>/About me</h1>
        <h2>{aboutMe.name}</h2>
        <h3>Education:</h3>
        <div id='displayArea'>
          {education.map((item, index) => (
            <EducationDisplay
              education={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
