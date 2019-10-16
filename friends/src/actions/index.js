import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAILURE = "FETCH_FAILURE"

export const CREATE_START = "CREATE_START"
export const CREATE_SUCCESS = "CREATE_SUCCESS"
export const CREATE_FAILURE = "CREATE_FAILURE"



//GETTING FRIENDS

export const getFriends = () => dispatch => {

    dispatch ({ type: FETCH_START });
    
    axiosWithAuth()
    .get('/api/friends')
    .then(response => {
        console.log(response);
        dispatch({ type: FETCH_SUCCESS, payload: response.data})
    })
    .catch(error => {
        console.log(error);
        dispatch({ type: FETCH_FAILURE, payload: error })
    })
}


//POSTING FRIENDS

export const createFriend = friend => dispatch => {

    dispatch({ type: CREATE_START});

    axiosWithAuth()
    .post('/api/friends', friend)
    .then(response => {
        console.log(response);
        dispatch({ type: CREATE_SUCCESS, payload: response.data})
    })
    .catch(error => {
        console.log(error);
        dispatch({ type: CREATE_FAILURE, payload: error })
    })
}
