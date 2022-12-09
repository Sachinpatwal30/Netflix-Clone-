import axios from "axios";
import { loginFailure, loginStart, loginSuccess,logout } from "./AuthAction";

export const login = async (userCredentials, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("auth/login", userCredentials);
        console.log(res.data);
          dispatch(loginSuccess(res.data));

    } catch (err) {

        dispatch(loginFailure());
    }
};


export const logOut= async (dispatch)=>{

    dispatch(logout());

}
