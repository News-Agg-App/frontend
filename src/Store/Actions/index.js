import axios from "axios";


export const ADD_STORY_START = "ADD_STORY_START";
export const ADD_STORY_SUCCESS = "ADD_STORY_SUCCESS";
export const ADD_STORY_FAILURE = "ADD_STORY_FAILURE";


// ADD NEW NEWS LINKS
export const addStory = props => {
    return dispatch => {
        dispatch({ type: ADD_STORY_START });
        axios
            .post("http://localhost:5000/api/posts", props)
            .then(res => {
                dispatch({ type: ADD_STORY_SUCCESS, payload: props })
            })
            .catch(err => {
                console.log(err.response);
                dispatch({ type: ADD_STORY_FAILURE, payload: err.response })
            })
    }
}