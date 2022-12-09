const UsersReducer = (state, action) => {

    switch (action.type) {

        case "GET_USERS_START":
            return {
                users: [],
                isFetching: true,
                error: false,
            };
        case "GET_USERS_SUCCESS":
            return {
                users: action.payload,
                isFetching: false,
                error: false,
            };
        case "GET_USERS_FAILURE":
            return {
                users: [],
                isFetching: false,
                error: true,
            };

        case "CREATE_USER_START":
            return {
                ...state,
                isFetching: false,
                error: false,
            };
        case "CREATE_USER_SUCCESS":
            return {

                users: [...state.users, action.payload],
                isFetching: false,
                error: false,
            };
        case "CREATE_USER_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };

        case "DELETE_USER_START": console.log("DELETE_USERS_START");
            return {
                ...state,
                isFetching: true,
                error: false,
            };

        case "DELETE_USER_SUCCESS": console.log("inside reducer and users are", state.users)
            return {
                users: state.users.filter((user) => { return user._id !== action.payload }),
                isFetching: false,
                error: false,
            };
        case "DELETE_USER_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            };

        default: return new Error("Invalid Action");

    }



}

export default UsersReducer;