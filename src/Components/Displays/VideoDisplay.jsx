import '../../App.css';
export default function VideoDisplay({ video }) {
  return (
    <div id='videoDisplay'>
      <h2 style={{ color: 'black' }}>{video.title}</h2>

      <iframe
        width='560'
        height='315'
        src={'https://www.youtube-nocookie.com/embed/' + video.link}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
        allowfullscreen
      />
      <p style={{ color: 'black' }}>{video.description}</p>
    </div>
  );
}
