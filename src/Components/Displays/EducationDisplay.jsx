import '../../App.css';
export default function EducationDisplay({ education }) {
  return (
    <div id='educationDisplay'>
      <h3>{education.name}</h3>
      <p>Awards:</p>
      {education.subjects.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
