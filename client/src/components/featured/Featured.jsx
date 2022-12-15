import "./featured.scss";
import { PlayArrow, InfoOutlined } from '@mui/icons-material';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

export default function Featured({ type, setGenres }) {

    const INITIAL_STATE = {

        img: "https://r4.wallpaperflare.com/wallpaper/212/657/279/the-avengers-avengers-endgame-ant-man-avengers-endgame-black-widow-hd-wallpaper-f3ead35a28f55c3d68c26ef3c1d8a251.jpg",
        imgTitle: "https://1000logos.net/wp-content/uploads/2019/05/Avengers-Logo-2012.png",
        desc: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers."

    }

    const [content, setContent] = useState(INITIAL_STATE);

    useEffect(() => {

        const getRandomContent = async () => {

            try {

                const res = await axios.get(`movies/random${type ? "?type=" + type : ""}`);

                setContent(res.data[0]);

            } catch (error) {
                console.log(error);
            }
        }
        getRandomContent();
    }, [type])





    return (
        <div className="featured">

            {type && (

                <div className="category">
                    <span>{(type === "movie") ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre" onChange={(e) => { setGenres(e.target.value) }}>
                        <option value="">Genre</option>

                        <option value="comedy">Comedy</option>
                        <option value="thriller">Thriller</option>
                        <option value="action">Action</option>
                        <option value="crime">Crime</option>
                        <option value="adventure">Adventure</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>

                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            {
                type ? (<><img src={content.img} alt="" />


                    <div className="info">

                        {content.imgTitle && <img src={content.imgTitle} alt="" />}
                        <span className="description">{content.desc}</span>

                        <div className="buttons">

           
                        <Link className="link" to="/watch" state={{ movie: "EngGame" }} >
                            <button className="play">
                                <PlayArrow />   <span>Play</span>
                            </button>

                            </Link>
 

                            <Link className="link" to="https://en.wikipedia.org/wiki/Avengers:_Endgame"  >
                            <button className="more">
                                <InfoOutlined />
                                <span>Info</span>
                            </button>
                            </Link>


                        </div>

                    </div></>) :
                    (<> <img src={"https://r4.wallpaperflare.com/wallpaper/212/657/279/the-avengers-avengers-endgame-ant-man-avengers-endgame-black-widow-hd-wallpaper-f3ead35a28f55c3d68c26ef3c1d8a251.jpg"} alt="user pic" />


                        <div className="info">
                            <img src="https://1000logos.net/wp-content/uploads/2019/05/Avengers-Logo-2012.png" alt="featured-img" />
                            <span className="description">Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. In the film, the surviving members of the Avengers and their allies attempt to reverse the destruction caused by Thanos in Infinity War.</span>
                            <div className="buttons">

                                <Link className="link" to="/watch" state={{ movie: "EngGame" }} >

                                    <button className="play">
                                        <PlayArrow /> <span>Play</span>
                                    </button>
                                </Link>

                                <button className="more">
                                    <InfoOutlined />
                                    <span>Info</span>
                                </button>
                            </div>
                        </div> </>)
            }
        </div>
    )
}
