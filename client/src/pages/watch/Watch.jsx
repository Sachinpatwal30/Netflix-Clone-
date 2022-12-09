import { ArrowBackOutlined } from '@mui/icons-material';
import "./watch.scss";
import { Link, useLocation } from 'react-router-dom';

export default function Watch() {

  const location= useLocation();
  console.log(location)
  const movie= location.state.movie;

  return (
    <div className="watch">

  <Link className='link' to="/" >
   <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
  </Link>

      <iframe className='video' src={ movie.video? movie.video : "https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&cc_load_policy=1&mute=1"}
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>



    </div>
  );
}
