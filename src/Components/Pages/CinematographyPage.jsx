import { Player } from 'video-react';
import '../../../node_modules/video-react/dist/video-react.css';
import '../../App.css';
export default function CinematographyPage() {
  return (
    <>
      <div>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/SRDogbxNMf8?si=gTNqU1WPRnnM4WTR'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
