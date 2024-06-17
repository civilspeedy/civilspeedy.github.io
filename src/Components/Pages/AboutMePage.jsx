import '../../App.css';
import M_HomeButton from '../../Mobile/Components/buttons/HomeButton';
import aboutMe from '../../assets/json/aboutMe.json';
import EducationDisplay from '../Displays/EducationDisplay';

export default function AboutMePage({ isMobile, setPage }) {
  const education = aboutMe.education;
  const other = aboutMe.other;
  const bio = aboutMe.bio;

  return (
    <>
      <div id='centerDiv'>
        <h1>/About me</h1>
        {isMobile && <M_HomeButton setPage={setPage} />}
        <div id='educationDisplay'>
          <h2>Charlie Slorick</h2>
          {bio.map((item, index) => (
            <p
              key={index}
              style={{ textAlign: 'left' }}>
              {item}
            </p>
          ))}

          <h2>Education:</h2>
          {education.map((item, index) => (
            <EducationDisplay
              education={item}
              key={index}
            />
          ))}
          <h2>Other Qualifications</h2>
          {other.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </>
  );
}
