import "./movieList.css"
import { DataGrid } from '@mui/x-data-grid';
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies, deleteMovie } from "../../context/movieContext/MoviesApiCalls";


export default function MovieList() {

    const { movies, dispatch } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatch);
    }, [dispatch]);




    const handleDelete = (id) => {
        deleteMovie(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 290 },
        {
            field: "movie",
            headerName: "Movie",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: "genre", headerName: "Genre", width: 120 },
        { field: "year", headerName: "year", width: 120 },
        { field: "limit", headerName: "limit", width: 120 },
        { field: "isSeries", headerName: "isSeries", width: 120 },

        {
            field: "action",
            headerName: "Action",
            width: 150,

            renderCell: (params) => {
                return (
                    <>
                        <Link className="link" to={"/movie/" + params.row._id} state={{ movie: params.row }}  >

                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="productList">
            <DataGrid
                rows={movies}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                checkboxSelection
                getRowId={(r) => r._id}
            />
        </div>
    );
}
