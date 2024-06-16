import '../../App.css';
export default function VideoDisplay({ video, mobile }) {
  let width = '560';
  let height = '315';
  let style = 'projectDisplay';
  if (mobile) {
    width = '300';
    height = 'auto';
    style = 'projectDisplayMobile';
  }
  return (
    <div id={style}>
      <h2 style={{ color: 'black' }}>{video.title}</h2>

      <iframe
        width={width}
        height={height}
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
