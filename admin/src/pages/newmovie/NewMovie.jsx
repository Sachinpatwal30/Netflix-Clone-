import { useContext, useState } from "react";
import "./newMovie.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebaseConfig";
import { createMovie } from "../../context/movieContext/MoviesApiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import {useNavigate} from "react-router-dom"

export default function NewMovie() {

    const [movie, setMovie] = useState(null);
    const [img, setImg] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [imgSm, setImgSm] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [noOfUploadFiles, setNoOfUploadFiles] = useState(0);
    const [count,setCount] = useState(0);
    const { dispatch } = useContext(MovieContext);
    const navigate= useNavigate();


    const handleChange = (e) => {


        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value })
    }


    const upload = (items) => {

        items.forEach((item) => {

            const fileName = new Date().getTime() + item.label + item.file.name;

            const storageRef = ref(storage, `/netflix-clone/${fileName}`);  // path before file name will create a folder with name netflix clone.

            const uploadTask = uploadBytesResumable(storageRef, item.file);

            uploadTask.on('state_changed',
                (snapshot) => {

                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default: new Error('Unknown state');
                            break;
                    }
                },
                (error) => {
                    console.log('Error: ' + error);
                },
                () => {

                    setCount(count+1);
                 
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                        setMovie((prev) => {
                            return { ...prev, [item.label]: downloadURL }
                        });

                       
                    });   setNoOfUploadFiles((prev) => prev + 1);
                    
                }
            );

        })
    }



   


    const handleUpload = (e) => {

        e.preventDefault();
        upload([
            { file: img, label: "img" },
            { file: imgTitle, label: "imgTitle" },
            { file: imgSm, label: "imgSm" },
            { file: trailer, label: "trailer" },
            { file: video, label: "video" },
        ]);

      
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        createMovie(movie, dispatch);
        navigate("/movies");
    }



    return (
        <div className="newProduct">

            <span className="title"> New Movie Details</span>

            <div className="temp">

                <form className="movieForm">

                    <div className="addProductItem">
                        <label>Movie Poster</label>
                        <input type="file" id="img" name="img" onChange={(e) => { setImg(e.target.files[0]) }} />
                    </div>
                    <div className="addProductItem">
                        <label>Title Image</label>
                        <input type="file" id="imgTitle" name="imgTitle" onChange={(e) => { setImgTitle(e.target.files[0]) }} />
                    </div>
                    <div className="addProductItem">
                        <label>Thumbnail Image</label>
                        <input type="file" placeholder="imgSm" name="imgSm" onChange={(e) => { setImgSm(e.target.files[0]) }} />
                    </div>
                    <div className="addProductItem">
                        <label>Movie Title</label>
                        <input
                            type="text"
                            placeholder="John Wick"
                            name="title"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="addProductItem">
                        <label>Description</label>
                        <input
                            type="text"
                            placeholder="description"
                            name="desc"
                            onChange={handleChange}

                        />
                    </div>
                    <div className="addProductItem">
                        <label>Year</label>
                        <input
                            type="text"
                            placeholder="Year"
                            name="year"
                            onChange={handleChange}

                        />
                    </div>
                    <div className="addProductItem">
                        <label>Genre</label>
                        <input
                            type="text"
                            placeholder="Genre"
                            name="genre"
                            onChange={handleChange}

                        />
                    </div>
                    <div className="addProductItem">
                        <label>Duration</label>
                        <input
                            type="text"
                            placeholder="Duration"
                            name="duration"
                            onChange={handleChange}

                        />
                    </div>
                    <div className="addProductItem">
                        <label>Limit</label>
                        <input
                            type="text"
                            placeholder="limit"
                            name="limit"
                            onChange={handleChange}

                        />
                    </div>
                    <div className="addProductItem">
                        <label>Is Series?</label>
                        <select name="isSeries" id="isSeries" onChange={handleChange} >
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>
                    <div className="addProductItem">
                        <label>Trailer</label>
                        <input
                            type="file"
                            name="trailer"
                            onChange={(e) => { setTrailer(e.target.files[0]) }}
                        />
                    </div>
                    <div className="addProductItem">
                        <label>Video</label>
                        <input
                            type="file"
                            name="video"
                            onChange={(e) => { setVideo(e.target.files[0]) }}

                        />
                    </div>

                    {
                        (noOfUploadFiles === 5) ?
                            (<button className="button create"  onClick={handleSubmit} >Create</button>) :
                            (<button className="button"  onClick={handleUpload} >Upload</button>)

                    }

                </form>

            </div>

        </div>
    );
}