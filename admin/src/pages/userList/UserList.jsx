import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { Link} from "react-router-dom"
import { useContext, useEffect } from "react";
import { deleteUser, getUsers } from "../../context/usersContext/UsersApiCalls";
import { UsersContext } from "../../context/usersContext/UserContext";

export default function UserList() {

   
    const {users,dispatch}= useContext(UsersContext);


    useEffect(()=>{

      getUsers(dispatch);

   
    },[dispatch]);


    const handleDelete = (id)=>{
        deleteUser(id,dispatch);
    }




    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'username', headerName: 'User name', width: 170, renderCell: (params) => {

              

                return (<div className="userListUser">

                    <img src={params.row.profilePicture} alt="" className="userListImg" />
                    {params.row.username}
                </div>)

            }
        },
        { field: 'email', headerName: 'User Email', width: 270 },
        { field: 'isAdmin', headerName: 'Is Admin', width: 120, },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params)=>{

            return (<>

            <Link to={"/user/" + params.row._id }    >
            <button className="userListEdit">Edit</button>
            </Link>

            <DeleteOutline className="userListDelete" onClick={()=>{handleDelete(params.row._id)}} />
            </>);

        } }
        
    ];

    return (
        <div className='userList'>

            <DataGrid
                rows={users}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick  
                getRowId={(r) => r._id}

            />
        </div>
    )
}
