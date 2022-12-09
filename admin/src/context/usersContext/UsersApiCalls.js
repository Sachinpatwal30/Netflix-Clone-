import axios from "axios";
import { createUserFailure, createUserStart, createUserSuccess, deleteUserFailure, deleteUserStart, deleteUserSuccess, getUsersFailure, getUsersStart, getUsersSuccess } from "./UsersActions";


//GET USERS
export const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get("/users", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(getUsersSuccess(res.data));
    } catch (err) {
        dispatch(getUsersFailure());
    }
};

//CREATE USER
export const createUser = async (userDetails, dispatch) => {
    dispatch(createUserStart());
    try {
      const res = await axios.post("auth/register" ,userDetails , {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        console.log(res.data);
        dispatch(createUserSuccess(res.data));
    } catch (err) {
        dispatch(createUserFailure());
    }
};



//DELETE USERS
export const deleteUser = async (id,dispatch) => {
    dispatch(deleteUserStart());
    try {
      const res=  await axios.delete("/users/"+id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        console.log(res.data);
            console.log("inside deleteUser function");
          dispatch(deleteUserSuccess(id));
    } catch (err) {
        dispatch(deleteUserFailure());
    }
};
