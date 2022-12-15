import "./listItem.scss";
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined, } from '@mui/icons-material';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ListItem({ index, movieId }) {

  const [movie, setMovie] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";


  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + movieId);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [movieId]);


  return (

    // sending data as prop
    <Link to={"/watch"} state={{ movie: movie }}  >
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={movie ? movie.img : " "}
          alt=""
        />
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie ? movie.duration : " "}</span>
                <span className="limit">{movie ? movie.limit : " "}</span>
                <span>{movie ? movie.year : " "}</span>
              </div>
              <div className="desc">{movie ? movie.desc : " "}</div>
              <div className="genre">{movie ? movie.genre : " "}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

