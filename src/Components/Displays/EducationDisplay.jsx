import '../../App.css';
export default function EducationDisplay({ education }) {
  return (
    <div>
      <h3>{education.name}</h3>
      {education.subjects.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
