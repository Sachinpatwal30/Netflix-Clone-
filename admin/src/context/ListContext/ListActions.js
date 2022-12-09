export const getListsStart = () => ({
    type: "GET_LISTS_START",
});

export const getListsSuccess = (Lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: Lists,
});

export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE",
});


//Create List Action
export const createListStart = () => ({
    type: "CREATE_LIST_START",
});

export const createListSuccess = (List) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: List,
});

export const createListsFailure = () => ({
    type: "CREATE_LIST_FAILURE",
});

//Delete List Action
export const deleteListStart = () => ({
    type: "DELETE_LIST_START",
});

export const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id,
});

export const deleteListFailure = () => ({
    type: "DELETE_LIST_FAILURE",
});

