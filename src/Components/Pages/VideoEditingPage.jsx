import '../../App.css';
import vegasIcon from '../../assets/icons/Vegas.svg';
export default function VideoEditingPage() {
  return (
    <>
      <div>
        <h1>/Video Editing Portfolio</h1>
        <h2>Tools Experience:</h2>
        <div id='displayArea'>
          <div id='toolDisplay'>
            <p>Vegas Editing Software</p>
            <img
              id='smallImage'
              src={vegasIcon}
              loading='lazy'
            />
            <p>3 Years Experience</p>
          </div>
        </div>
      </div>
    </>
  );
}
