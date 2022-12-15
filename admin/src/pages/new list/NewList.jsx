import { useContext, useState, useEffect } from "react";
import "./newList.css";
import {  getMovies } from "../../context/movieContext/MoviesApiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/ListContext/ListContext";
import { createList } from "../../context/ListContext/ListApiCalls";
import {useNavigate} from "react-router-dom"

export default function NewList() {

    const [list, setList] = useState(null);
    const { dispatch } = useContext(ListContext);
    const [content, setContent] = useState([])
    const { movies, dispatch: moviesDispatch } = useContext(MovieContext);
    const navigate= useNavigate();


    useEffect(() => {
        getMovies(moviesDispatch);
    }, [moviesDispatch]);


    const handleChange = (e) => {

        const value = e.target.value;
        setList({ ...list, [e.target.name]: value })

       
    }

    console.log(list);

    const handleSubmit = (e) => {

        e.preventDefault();
        createList(list, dispatch);
        navigate("/lists");
    }

   

    const handleSelect = (e) => {

        setContent((prev) => { return [...prev, e.target.value] });
        setList({ ...list, [e.target.name]: [...content] });
        
    }

  

    return (
        <div className="newProduct">

            <span className="title"> New List Details</span>

            <form className="addProductForm">


                <div className="left">


                <div className="addProductItem">
                    <label>List Title</label>
                    <input
                        type="text"
                        placeholder="Comedy Movies "
                        name="title"
                        onChange={handleChange}


                    />
                </div>

                <div className="addProductItem">
                    <label>Genre</label>
                    <input
                        type="text"
                        placeholder="Action"
                        name="genre"
                        onChange={handleChange}

                    />
                </div>

                <div className="addProductItem">
                    <label>Type</label>

                    <select name="type" onChange={handleChange} >
                        <option  >Type</option>
                        <option value="movie" >Movie</option>
                        <option value="series" >Series</option>
                    </select>
                </div>

                </div>

                    <div className="right">

                    <div className="addProductItem">
                    <label>Movies</label>

                    <select multiple  style={{ height: "480px" }} name="content" onChange={handleSelect} >

                        {movies.map((movie) => {
                            return <option key={movie._id} value={movie._id} name={movie.title}>{movie.title}</option>
                        })
                        }

                    </select>
                </div>


                    </div>
             
                <button className="addProductButton" onClick={handleSubmit} >Create</button>

            </form>
        </div>
    );
}