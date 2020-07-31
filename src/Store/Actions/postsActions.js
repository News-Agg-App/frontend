import axiosWithAuth from "../../utils/axiosWithAuth"
import beURL from "../../utils/beURL"


export const GET_STORIES_START = "GET_STORIES_START";
export const GET_STORIES_SUCCESS = "GET_STORIES_SUCCESS";
export const GET_STORIES_FAILURE = "GET_STORIES_FAILURE";
export const ADD_STORY_START = "ADD_STORY_START";
export const ADD_STORY_SUCCESS = "ADD_STORY_SUCCESS";
export const ADD_STORY_FAILURE = "ADD_STORY_FAILURE";

// Get Links
export const getStories = () => dispatch => {
    dispatch({ type: GET_STORIES_START });
    axiosWithAuth()
        .get(`${beURL}posts`)
        .then(res => {
            console.log('res from getStories', res)
            dispatch({ type: GET_STORIES_SUCCESS, payload: res })

        })
        .catch(err => {
            dispatch({ type: GET_STORIES_FAILURE, payload: err })
        })
}
// ADD NEW NEWS LINKS
export const addStory = story => dispatch => {
    dispatch({ type: ADD_STORY_START });
    axiosWithAuth()
        .post(`${beURL}posts`, story)
        .then(res => {
            dispatch({ type: ADD_STORY_SUCCESS, payload: res })
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ type: ADD_STORY_FAILURE, payload: err.response })
        })
}
