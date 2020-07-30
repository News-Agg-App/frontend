import {
  ADD_STORY_START,
  ADD_STORY_SUCCESS,
  ADD_STORY_FAILURE
} from "../Actions";

const initialState = {
  isLoading: false,
  newsStory: [],
  data: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
