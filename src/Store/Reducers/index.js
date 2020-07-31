import {
  ADD_STORY_START,
  ADD_STORY_SUCCESS,
  ADD_STORY_FAILURE,
  GET_STORIES_START,
  GET_STORIES_SUCCESS,
  GET_STORIES_FAILURE
} from "../Actions";

const initialState = {
  isLoading: false,
  curStory: null,
  stories: [],
  data: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_STORIES_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case GET_STORIES_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case GET_STORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case ADD_STORY_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case ADD_STORY_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case ADD_STORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
};
