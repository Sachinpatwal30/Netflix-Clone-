import "./listList.css"
import { DataGrid } from '@mui/x-data-grid';
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { ListContext } from "../../context/ListContext/ListContext";
import { deleteList, getLists } from "../../context/ListContext/ListApiCalls";


export default function ListList() {

    const { lists, dispatch } = useContext(ListContext);

   useEffect(()=>{

    getLists(dispatch);

   },[dispatch])



 

    const handleDelete = (id) => {
       
        deleteList(id, dispatch);
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 300 },
        { field: "title", headerName: "Title", width: 300 },
        { field: "genre", headerName: "Genre", width: 150 },
        { field: "type", headerName: "Type", width: 150 },
        
        {
            field: "action",
            headerName: "Action",
            width: 150,

            renderCell: (params) => {
                return (
                    <>
                        <Link className="link" to={"/lists/" + params.row._id} state={{ movie: params.row }}  >

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
                rows={lists}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
                getRowId={(r) => r._id}
            />
        </div>
    );
}
